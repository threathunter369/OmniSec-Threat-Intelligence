import { Box, Container, useToast } from '@chakra-ui/react';
import { useEffect, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ErrorBoundary from '../common/ErrorBoundary';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const toast = useToast();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleError = (event: ErrorEvent) => {
      event.preventDefault();
      console.error('Global error:', event.error);
      toast({
        title: 'An error occurred',
        description: 'We encountered an issue. Please try refreshing the page.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      event.preventDefault();
      console.error('Unhandled promise rejection:', event.reason);
      toast({
        title: 'An error occurred',
        description: 'We encountered an issue. Please try refreshing the page.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [toast]);

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <ErrorBoundary>
        <Navbar />
        <Box flex="1" as="main">
          <Container maxW="container.xl" py={4}>
            {children}
          </Container>
        </Box>
        <Footer />
      </ErrorBoundary>
    </Box>
  );
};

export default Layout;
