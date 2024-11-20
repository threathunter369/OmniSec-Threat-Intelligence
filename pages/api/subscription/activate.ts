import { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from 'firebase-admin/auth';
import { initAdmin } from '../../../config/firebase-admin';

// Initialize Firebase Admin
initAdmin();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Extract the token
    const token = authHeader.split('Bearer ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Verify the token and get user data
    const decodedToken = await getAuth().verifyIdToken(token);
    const uid = decodedToken.uid;

    // Get subscription data from request body
    const { orderId, planId, paymentDetails } = req.body;

    if (!orderId || !planId || !paymentDetails) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Verify the payment with PayPal
    const paypalResponse = await verifyPayPalPayment(orderId);
    if (!paypalResponse.success) {
      return res.status(400).json({ error: 'Invalid payment' });
    }

    // Set custom claims for the user
    await getAuth().setCustomUserClaims(uid, {
      subscription: {
        plan: planId,
        active: true,
        orderId: orderId,
        activatedAt: new Date().toISOString(),
      },
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Subscription activated successfully',
    });
  } catch (error) {
    console.error('Subscription activation error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to activate subscription',
    });
  }
}

async function verifyPayPalPayment(orderId: string): Promise<{ success: boolean }> {
  try {
    const auth = Buffer.from(
      `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET_KEY}`
    ).toString('base64');

    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to verify PayPal payment');
    }

    const data = await response.json();
    return {
      success: data.status === 'COMPLETED',
    };
  } catch (error) {
    console.error('PayPal verification error:', error);
    return { success: false };
  }
}
