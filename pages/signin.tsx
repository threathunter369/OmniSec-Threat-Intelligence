import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import SignInForm from '../components/auth/SignInForm';
import PublicRoute from '../components/auth/PublicRoute';
import Head from 'next/head';

export default function SignIn() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <PublicRoute>
      <Head>
        <title>Sign In - OmniSec Live</title>
      </Head>
      <Box minH="100vh" bg={bgColor} py={20}>
        <Container maxW="lg">
          <VStack spacing={8} align="center">
            <VStack spacing={2} textAlign="center">
              <Heading size="xl">Welcome Back</Heading>
              <Text color="gray.500">
                Sign in to access your security dashboard
              </Text>
            </VStack>
            <SignInForm />
          </VStack>
        </Container>
      </Box>
    </PublicRoute>
  );
}
