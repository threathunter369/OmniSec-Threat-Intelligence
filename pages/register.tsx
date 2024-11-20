import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import AuthForm from '../components/auth/AuthForm';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RegisterPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <Box py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading size="xl" mb={2}>
            Create an Account
          </Heading>
          <Text color="gray.600">
            Join OmniSec Live for comprehensive threat intelligence
          </Text>
        </Box>
        <AuthForm mode="register" />
      </VStack>
    </Box>
  );
};

export default RegisterPage;
