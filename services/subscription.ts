import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export const subscriptionPlans = {
  regular: {
    id: 'price_regular',
    name: 'Regular',
    price: 10,
    features: [
      'Basic Threat Intelligence',
      'IP and URL Scanning',
      'Basic AI Recommendations',
      'Email Reports'
    ]
  },
  pro: {
    id: 'price_pro',
    name: 'Pro',
    price: 20,
    features: [
      'Advanced Threat Intelligence',
      'IP, URL, and Hash Scanning',
      'Detailed AI Recommendations',
      'Real-time Alerts',
      'API Access',
      'Priority Support'
    ]
  },
  enterprise: {
    id: 'price_enterprise',
    name: 'Enterprise',
    price: 50,
    features: [
      'Full Threat Intelligence Suite',
      'Custom API Integration',
      'Advanced AI Analysis',
      'Dedicated Support',
      'Custom Reports',
      'Team Management',
      'SLA Guarantee'
    ]
  }
};

export const subscriptionService = {
  async handleSubscriptionChange(
    subscriptionId: string,
    userId: string,
    planId: string,
    status: string
  ): Promise<void> {
    try {
      // Update user's subscription status in Firestore
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        subscriptionStatus: status,
        subscriptionTier: planId,
        subscriptionPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      });
    } catch (error) {
      console.error('Subscription Update Error:', error);
      throw new Error('Failed to update subscription');
    }
  },

  async cancelSubscription(
    userId: string
  ): Promise<void> {
    try {
      // Update user's subscription status in Firestore
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        subscriptionStatus: 'canceled',
        subscriptionTier: null,
        subscriptionPeriodEnd: null,
      });
    } catch (error) {
      console.error('Subscription Cancellation Error:', error);
      throw new Error('Failed to cancel subscription');
    }
  }
};
