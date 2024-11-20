import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

const ForgotPasswordPage = () => {
  const { resetPassword } = useAuth();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: async (values) => {
      try {
        await resetPassword(values.email);
        toast({
          title: 'Password reset email sent',
          description: 'Please check your email for further instructions',
          status: 'success',
          duration: 5000,
        });
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

  return (
    <Box py={10}>
      <VStack spacing={8} maxW="md" mx="auto">
        <Box textAlign="center">
          <Heading size="xl" mb={2}>
            Reset Password
          </Heading>
          <Text color="gray.600">
            Enter your email address to receive password reset instructions
          </Text>
        </Box>

        <Box w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
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

              <Button
                type="submit"
                colorScheme="brand"
                size="lg"
                fontSize="md"
                isLoading={formik.isSubmitting}
                w="100%"
              >
                Send Reset Link
              </Button>

              <Link href="/login">
                <Text
                  color="brand.500"
                  _hover={{ textDecoration: 'underline' }}
                  textAlign="center"
                >
                  Back to Login
                </Text>
              </Link>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default ForgotPasswordPage;
