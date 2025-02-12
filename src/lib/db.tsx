import bcrypt from 'bcryptjs';


const users = [
  {
    id: 1,
    email: 'buyer@gmail.com',
    password: bcrypt.hashSync('buyerpassword', 10),
    role: 'buyer'
  },
  {
    id: 2,
    email: 'seller@gmail.com',
    password: bcrypt.hashSync('sellerpassword', 10),
    role: 'seller'
  },
  {
    id: 3,
    email: 'john.doe@gmail.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'buyer'
  }
];

async function getUserByEmail(email: string) {
  return users.find(user => user.email === email) || null;
}

export default {
  getUserByEmail,
};
