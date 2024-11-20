import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import Link from '../common/Link';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signInWithGoogle } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }

      console.log('SignInForm: Attempting login with email:', email);
      const result = await signIn(email, password);
      
      if (!result.user) {
        throw new Error('No user data received');
      }

      if (!result.user.emailVerified) {
        toast({
          title: 'Email not verified',
          description: 'Please check your email for verification link',
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      console.log('SignInForm: Login successful, user:', result.user.email);
      toast({
        title: 'Success!',
        description: 'You have been successfully signed in.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push('/dashboard');
    } catch (error: any) {
      console.error('SignInForm: Login error:', error);
      let errorMessage = 'Failed to sign in';
      
      if (error.code) {
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = 'Invalid email address';
            break;
          case 'auth/user-disabled':
            errorMessage = 'This account has been disabled';
            break;
          case 'auth/user-not-found':
            errorMessage = 'No account found with this email';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Incorrect password';
            break;
          case 'auth/too-many-requests':
            errorMessage = 'Too many failed attempts. Please try again later';
            break;
          case 'auth/operation-not-allowed':
            errorMessage = 'This sign-in method is not enabled. Please contact support.';
            break;
          default:
            errorMessage = error.message || 'Failed to sign in';
        }
      }

      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      console.log('SignInForm: Attempting Google sign in');
      const result = await signInWithGoogle();
      console.log('SignInForm: Google sign in successful, user:', result.user.email);
      toast({
        title: 'Success!',
        description: 'You have been successfully signed in with Google.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push('/dashboard');
    } catch (error: any) {
      console.error('SignInForm: Google sign in error:', error);
      let errorMessage = error.message || 'Failed to sign in with Google';
      
      if (error.code === 'auth/operation-not-allowed') {
        errorMessage = 'Google sign-in is not enabled. Please contact support.';
      }
      
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box 
      as="form" 
      onSubmit={handleSubmit} 
      width="100%" 
      maxW="400px"
      bg={bgColor}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      border="1px solid"
      borderColor={borderColor}
    >
      <VStack spacing={6}>
        <Button
          leftIcon={<FcGoogle />}
          w="100%"
          onClick={handleGoogleSignIn}
          isLoading={loading}
          mb={4}
          variant="outline"
          _hover={{
            bg: 'gray.50',
          }}
          isDisabled={loading}
        >
          Sign in with Google
        </Button>

        <Divider />

        <Stack spacing={4} width="100%">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              isDisabled={loading}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              isDisabled={loading}
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            width="100%"
            isLoading={loading}
            isDisabled={loading}
          >
            Sign In
          </Button>
        </Stack>

        <Text fontSize="sm" color="gray.500" textAlign="center">
          Don&apos;t have an account?{' '}
          <Link href="/signup" color={'blue.400'}>
            Sign up
          </Link>
        </Text>

        <Link href="/forgot-password" color={'blue.400'}>
          Forgot Password?
        </Link>
      </VStack>
    </Box>
  );
};

export default SignInForm;
