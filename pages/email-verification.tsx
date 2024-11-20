import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { sendEmailVerification } from 'firebase/auth';

export default function EmailVerification() {
  const { user } = useAuth();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (!user) {
      router.push('/signin');
    }
  }, [user, router]);

  const handleResendVerification = async () => {
    try {
      if (user && !user.emailVerified) {
        await sendEmailVerification(user);
        toast({
          title: 'Success',
          description: 'Verification email has been resent',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to resend verification email',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleRefreshStatus = async () => {
    try {
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          toast({
            title: 'Success',
            description: 'Email verified successfully!',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          router.push('/dashboard');
        } else {
          toast({
            title: 'Info',
            description: 'Email not verified yet. Please check your email.',
            status: 'info',
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to check verification status',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="xl">
          Verify Your Email
        </Heading>
        <Text fontSize="lg">
          We&apos;ve sent a verification email to: {user.email}
        </Text>
        <Text>
          Please check your email and click the verification link to continue.
        </Text>
        <Box>
          <Button
            colorScheme="blue"
            onClick={handleResendVerification}
            mr={4}
          >
            Resend Verification Email
          </Button>
          <Button onClick={handleRefreshStatus}>
            I&apos;ve Verified My Email
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}
