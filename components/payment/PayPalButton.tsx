import { PayPalButtons } from '@paypal/react-paypal-js';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface PayPalButtonProps {
  amount: string;
  planId: string;
  onSuccess?: () => void;
}

const PayPalButton = ({ amount, planId, onSuccess }: PayPalButtonProps) => {
  const toast = useToast();
  const router = useRouter();

  const handleApprove = async (data: any, actions: any) => {
    try {
      const order = await actions.order.capture();
      
      // Call your API to update subscription status
      const response = await fetch('/api/subscription/activate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: order.id,
          planId: planId,
          paymentDetails: order,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to activate subscription');
      }

      toast({
        title: 'Payment Successful',
        description: 'Your subscription has been activated.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      onSuccess?.();
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        title: 'Payment Failed',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <PayPalButtons
      style={{ layout: 'vertical' }}
      createOrder={(data, actions) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                value: amount.toString(),
                currency_code: 'USD'
              },
              description: `OmniSec Live Subscription - ${planId}`,
            },
          ],
        });
      }}
      onApprove={handleApprove}
      onError={(err) => {
        toast({
          title: 'Payment Error',
          description: 'There was an error processing your payment.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        console.error('PayPal Error:', err);
      }}
    />
  );
};

export default PayPalButton;
