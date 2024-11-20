import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    await sendPasswordResetEmail(auth, email);

    return res.status(200).json({ message: 'Password reset email sent successfully' });
  } catch (error: any) {
    console.error('Error sending password reset email:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
