import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const token = jwt.sign(
  { email: process.env.ADMIN_EMAIL }, 
  process.env.JWT_SECRET, 
  { expiresIn: '1d' }
);

console.log('Admin JWT Token:', token);
