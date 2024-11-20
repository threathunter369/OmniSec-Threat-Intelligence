import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import SignUpForm from '../components/auth/SignUpForm';
import PublicRoute from '../components/auth/PublicRoute';
import Head from 'next/head';

export default function SignUp() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <PublicRoute>
      <Head>
        <title>Sign Up - OmniSec Live</title>
      </Head>
      <Box minH="100vh" bg={bgColor} py={20}>
        <Container maxW="lg">
          <VStack spacing={8} align="center">
            <VStack spacing={2} textAlign="center">
              <Heading size="xl">Create an Account</Heading>
              <Text color="gray.500">
                Join OmniSec Live for advanced security monitoring
              </Text>
            </VStack>
            <SignUpForm />
          </VStack>
        </Container>
      </Box>
    </PublicRoute>
  );
}
