import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import SignInForm from '../components/auth/SignInForm';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LoginPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/dashboard');
    }
  }, [user, loading, router]);

  if (loading) {
    return null;
  }

  if (user) {
    return null;
  }

  return (
    <Box py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading size="xl" mb={2}>
            Welcome Back
          </Heading>
          <Text color="gray.600">
            Sign in to access your threat intelligence dashboard
          </Text>
        </Box>
        <SignInForm />
      </VStack>
    </Box>
  );
};

export default LoginPage;
