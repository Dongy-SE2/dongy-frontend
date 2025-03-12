"use server";
import { NextResponse } from "next/server";

export default async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password)
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  try {
    // Send login credentials to the client-side for authentication
    return NextResponse.json({ email, password }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
