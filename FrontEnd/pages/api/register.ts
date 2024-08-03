import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    
    await connect();

    try {
      
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

     
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();

      return res.status(200).json({ message: 'User is registered' });
    } catch (err) {
      console.error('Error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
  } 
}