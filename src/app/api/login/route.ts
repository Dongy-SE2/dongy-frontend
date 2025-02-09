import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import db from '@/lib/db';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();  

  try {
   
    const user = await db.getUserByEmail(email);

    if (!user) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

  
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

  
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export function PUT() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
