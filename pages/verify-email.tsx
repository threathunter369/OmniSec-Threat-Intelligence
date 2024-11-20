import { useEffect, useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { applyActionCode } from 'firebase/auth';
import { auth } from '../config/firebase';

const VerifyEmailPage = () => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const { user } = useAuth();

  useEffect(() => {
    const verifyEmail = async () => {
      const { oobCode } = router.query;

      if (typeof oobCode === 'string') {
        try {
          await applyActionCode(auth, oobCode);
          setIsVerified(true);
          toast({
            title: 'Email verified',
            description: 'Your email has been successfully verified',
            status: 'success',
            duration: 5000,
          });
        } catch (error: any) {
          toast({
            title: 'Verification failed',
            description: error.message,
            status: 'error',
            duration: 5000,
          });
        }
      }
      setIsVerifying(false);
    };

    if (router.query.oobCode) {
      verifyEmail();
    }
  }, [router.query, toast]);

  const handleContinue = () => {
    router.push('/dashboard');
  };

  if (isVerifying) {
    return (
      <Box py={10}>
        <VStack spacing={8}>
          <Spinner size="xl" color="brand.500" />
          <Text>Verifying your email...</Text>
        </VStack>
      </Box>
    );
  }

  return (
    <Box py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading size="xl" mb={2}>
            {isVerified ? 'Email Verified' : 'Verification Failed'}
          </Heading>
          <Text color="gray.600">
            {isVerified
              ? 'Your email has been successfully verified. You can now access all features.'
              : 'There was a problem verifying your email. Please try again or contact support.'}
          </Text>
        </Box>

        {isVerified && (
          <Button colorScheme="brand" size="lg" onClick={handleContinue}>
            Continue to Dashboard
          </Button>
        )}

        {!isVerified && (
          <Button colorScheme="brand" size="lg" onClick={() => router.push('/login')}>
            Back to Login
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default VerifyEmailPage;
