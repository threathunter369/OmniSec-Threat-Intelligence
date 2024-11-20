import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
  ListIcon,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '49.99',
    features: [
      'Basic threat intelligence',
      'Standard API access',
      'Email notifications',
      '5 searches per day',
      'Basic support',
    ],
  },
  {
    id: 'pro',
    name: 'Professional Plan',
    price: '99.99',
    features: [
      'Advanced threat intelligence',
      'Premium API access',
      'Real-time notifications',
      'Unlimited searches',
      'Priority support',
      'Custom reports',
      'Team collaboration',
    ],
  },
];

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');
  const borderColor = useColorModeValue('#E2E8F0', '#2D3748');
  const textColor = useColorModeValue('#4A5568', '#A0AEC0');

  const handleCreateOrder = (data: any, actions: any) => {
    const plan = selectedPlan;
    if (!plan) return;

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: plan.price,
            currency_code: 'USD',
          },
          description: `OmniSec Live - ${plan.name}`,
        },
      ],
    });
  };

  const handleApprove = async (data: any, actions: any) => {
    if (!user || !selectedPlan) {
      toast({
        title: 'Error',
        description: 'Please log in to complete your purchase',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsProcessing(true);

    try {
      const order = await actions.order.capture();
      
      // Get the user's ID token
      const idToken = await user.getIdToken();

      // Call your API to activate the subscription
      const response = await fetch('/api/subscription/activate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          orderId: order.id,
          planId: selectedPlan.id,
          paymentDetails: order,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to activate subscription');
      }

      toast({
        title: 'Success!',
        description: 'Your subscription has been activated',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      router.push('/dashboard');
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: 'Error',
        description: 'Failed to activate subscription. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsProcessing(false);
      setSelectedPlan(null);
    }
  };

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={8} as="section" textAlign="center" mb={16}>
        <Heading as="h1" size="2xl">
          Choose Your Plan
        </Heading>
        <Text fontSize="xl" color={textColor}>
          Select the perfect plan for your security needs
        </Text>
      </VStack>

      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: 8, lg: 4 }}
        align="center"
        justify="center"
      >
        {pricingPlans.map((plan) => (
          <Box
            key={plan.id}
            bg={bgColor}
            border="1px"
            borderColor={borderColor}
            rounded="xl"
            shadow="lg"
            p={8}
            w={{ base: 'full', lg: '380px' }}
            position="relative"
            transform={plan.id === 'pro' ? 'scale(1.05)' : 'none'}
          >
            <VStack spacing={4} align="stretch">
              <Heading size="lg">{plan.name}</Heading>
              <Box>
                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  color="blue.500"
                >
                  ${plan.price}
                </Text>
                <Text fontSize="sm" color={textColor}>
                  per month
                </Text>
              </Box>

              <List spacing={3}>
                {plan.features.map((feature, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <ListIcon as={CheckIcon} color="green.500" />
                    <Text color={textColor}>{feature}</Text>
                  </ListItem>
                ))}
              </List>

              {selectedPlan?.id === plan.id ? (
                <Box mt={4}>
                  <PayPalButtons
                    style={{ layout: 'vertical' }}
                    createOrder={handleCreateOrder}
                    onApprove={handleApprove}
                    onError={(err) => {
                      console.error('PayPal Error:', err);
                      toast({
                        title: 'Payment Error',
                        description: 'There was an error processing your payment',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                      });
                    }}
                    disabled={isProcessing}
                  />
                </Box>
              ) : (
                <Button
                  mt={4}
                  colorScheme="blue"
                  size="lg"
                  w="full"
                  onClick={() => setSelectedPlan(plan)}
                  isDisabled={isProcessing}
                >
                  Select Plan
                </Button>
              )}
            </VStack>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default PricingPage;
