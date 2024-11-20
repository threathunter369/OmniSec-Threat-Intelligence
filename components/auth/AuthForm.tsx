import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
  Divider,
  Center,
  Icon,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';

interface AuthFormProps {
  mode: 'login' | 'register';
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const toast = useToast();
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    ...(mode === 'register' && {
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Password confirmation is required'),
    }),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      ...(mode === 'register' && { confirmPassword: '' }),
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (mode === 'login') {
          await signIn(values.email, values.password);
          toast({
            title: 'Login successful',
            status: 'success',
            duration: 3000,
          });
        } else {
          await signUp(values.email, values.password);
          toast({
            title: 'Registration successful',
            description: 'Please check your email for verification link',
            status: 'success',
            duration: 5000,
          });
        }
        router.push('/dashboard');
      } catch (error: any) {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 5000,
        });
      }
    },
  });

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast({
        title: 'Login successful',
        status: 'success',
        duration: 3000,
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <Text color="red.500" fontSize="sm">
                {formik.errors.email}
              </Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <Text color="red.500" fontSize="sm">
                {formik.errors.password}
              </Text>
            )}
          </FormControl>

          {mode === 'register' && (
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <Text color="red.500" fontSize="sm">
                  {formik.errors.confirmPassword}
                </Text>
              )}
            </FormControl>
          )}

          <Button
            type="submit"
            colorScheme="brand"
            size="lg"
            fontSize="md"
            isLoading={formik.isSubmitting}
          >
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </Button>

          <Divider />

          <Button
            w={'full'}
            variant={'outline'}
            leftIcon={<Icon as={FcGoogle} />}
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </Button>

          {mode === 'login' ? (
            <Stack direction="row" justify="space-between" fontSize="sm">
              <Link href="/register">
                <Text color="brand.500" _hover={{ textDecoration: 'underline' }}>
                  Create an account
                </Text>
              </Link>
              <Link href="/forgot-password">
                <Text color="brand.500" _hover={{ textDecoration: 'underline' }}>
                  Forgot password?
                </Text>
              </Link>
            </Stack>
          ) : (
            <Center>
              <Text fontSize="sm">
                Already have an account?{' '}
                <Link href="/login">
                  <Text
                    as="span"
                    color="brand.500"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    Sign in
                  </Text>
                </Link>
              </Text>
            </Center>
          )}
        </Stack>
      </form>
    </Box>
  );
};

export default AuthForm;
