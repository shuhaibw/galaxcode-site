import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', cookie.serialize('token', '', {
      httpOnly: true,
      maxAge: -1, 
      sameSite: 'strict',
      path: '/',
    }));

    res.status(200).json({ message: 'Logged out successfully' })
  }
}