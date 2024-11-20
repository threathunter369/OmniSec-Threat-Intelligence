import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../config/firebase';
import { sendEmailVerification } from 'firebase/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { user } = req.body;

    if (!user) {
      return res.status(400).json({ error: 'User is required' });
    }

    await sendEmailVerification(user);

    return res.status(200).json({ message: 'Verification email sent successfully' });
  } catch (error: any) {
    console.error('Error sending verification email:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
