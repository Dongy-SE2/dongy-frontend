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
  }
];

async function getUserByEmail(email: string) {
  return users.find(user => user.email === email) || null;
}

export default {
  getUserByEmail,
};
