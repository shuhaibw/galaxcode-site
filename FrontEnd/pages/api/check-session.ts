import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import User from '@/models/User'
import connect from '@/utils/db'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

const jwtSecret = process.env.JWT_SECRET

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
   
   if (req.method === 'POST') {

   const {username, password} = req.body

   await connect()

   try {
      const user = await User.findOne({username})

      if (!user) {
         return res.status(401).json({message: 'User not found'})
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
         return res.status(401).json({message: 'Invalid password'})
      }

      const token = jwt.sign({ username }, jwtSecret as string , { expiresIn: '1w' })

      res.setHeader('Set-Cookie', cookie.serialize('token', token, {
         httpOnly: true,
         maxAge: 60 * 60 * 24 * 7, 
         sameSite: 'strict',
         path: '/',
       }))

      return res.status(200).json({message: "Login successful"})
   }

   catch(err){
      console.log ("Error logging in ", err)
      return res.status(500).json({message: "An internal server error"})
   }
 }
}