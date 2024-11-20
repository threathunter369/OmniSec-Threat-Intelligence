import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
  FormErrorMessage,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import Link from '../common/Link';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const { signUp, signInWithGoogle } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword()) return;

    setLoading(true);
    try {
      await signUp(email, password);
      toast({
        title: 'Success!',
        description: 'Your account has been created. Please check your email for verification.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
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
      console.log('SignUpForm: Attempting Google sign in');
      await signInWithGoogle();
      console.log('SignUpForm: Google sign in successful');
      toast({
        title: 'Success!',
        description: 'You have been successfully signed up with Google.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push('/dashboard');
    } catch (error: any) {
      console.error('SignUpForm: Google sign in error:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to sign in with Google',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      as="form" 
      onSubmit={handleSubmit} 
      width="100%" 
      maxW="400px"
      bg={useColorModeValue('white', 'gray.700')}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
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
            bg: useColorModeValue('gray.50', 'gray.600'),
          }}
        >
          Sign up with Google
        </Button>

        <Text>Or sign up with email</Text>

        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </FormControl>

        <FormControl id="password" isRequired isInvalid={!!passwordError}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <FormErrorMessage>{passwordError}</FormErrorMessage>
        </FormControl>

        <FormControl id="confirmPassword" isRequired isInvalid={!!passwordError}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading}
          />
          <FormErrorMessage>{passwordError}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          w="100%"
          isLoading={loading}
        >
          Sign Up
        </Button>

        <Text>
          Already have an account?{' '}
          <Link href="/signin" color="blue.500">
            Sign in
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default SignUpForm;
