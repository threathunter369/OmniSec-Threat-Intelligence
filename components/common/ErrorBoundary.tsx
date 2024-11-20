import React from 'react';
import { Box, Button, Heading, Text, VStack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRefresh = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (typeof window !== 'undefined') {
      const router = require('next/router').default;
      router.reload();
    }
  };

  private handleNavigateHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (typeof window !== 'undefined') {
      const router = require('next/router').default;
      router.push('/');
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Box p={8} display="flex" alignItems="center" justifyContent="center" minH="200px">
          <VStack spacing={6} align="center">
            <Heading size="lg">Oops! Something went wrong</Heading>
            <Text color="gray.600" textAlign="center">
              {this.state.error?.message || 'An unexpected error occurred'}
            </Text>
            <Box>
              <Button
                onClick={this.handleRefresh}
                colorScheme="blue"
                mr={4}
              >
                Refresh Page
              </Button>
              <Button
                onClick={this.handleNavigateHome}
                variant="outline"
              >
                Go to Home
              </Button>
            </Box>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
