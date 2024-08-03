import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "./BACKEND_URI"


export default function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'GET') {
      const token = req.cookies.token || ''

      try {
         const decoded = jwt.verify(token, JWT_SECRET)
         res.status(200).json({ loggedIn: !!decoded })
      }
      catch {
         res.status(200).json({ loggedIn: false })
      }
   }
}