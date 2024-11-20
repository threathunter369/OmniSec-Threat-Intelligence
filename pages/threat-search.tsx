import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Select,
  Text,
  Alert,
  AlertIcon,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { threatIntelligenceService } from '../services/threatIntelligence';

export default function ThreatSearch() {
  const [searchType, setSearchType] = useState<'ip' | 'url' | 'hash'>('ip');
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState('');
  const toast = useToast();

  const handleSearch = async () => {
    if (!searchValue) {
      toast({
        title: 'Error',
        description: 'Please enter a value to search',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    setError('');
    setResults([]);
    
    try {
      let response;
      switch (searchType) {
        case 'ip':
          response = await threatIntelligenceService.checkIP(searchValue);
          break;
        case 'url':
          response = await threatIntelligenceService.checkURL(searchValue);
          break;
        case 'hash':
          response = await threatIntelligenceService.checkHash(searchValue);
          break;
        default:
          throw new Error('Invalid search type');
      }
      
      if (response && response.length > 0) {
        setResults(response);
      } else {
        setError('No results found for the given search term');
      }
    } catch (err: any) {
      console.error('Search error:', err);
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
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

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" mb={6}>
          Threat Intelligence Search
        </Heading>

        <Box bg="white" p={6} borderRadius="md" shadow="md">
          <VStack spacing={4}>
            <Select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value as 'ip' | 'url' | 'hash')}
            >
              <option value="ip">IP Address</option>
              <option value="url">URL</option>
              <option value="hash">File Hash</option>
            </Select>

            <Input
              placeholder={`Enter ${searchType.toUpperCase()} to search`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <Button
              colorScheme="blue"
              onClick={handleSearch}
              isLoading={loading}
              loadingText="Searching..."
              width="full"
            >
              Search
            </Button>
          </VStack>
        </Box>

        {loading && (
          <Box textAlign="center" py={4}>
            <Spinner size="xl" />
          </Box>
        )}

        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {results.length > 0 && (
          <Box bg="white" p={6} borderRadius="md" shadow="md">
            <Heading size="md" mb={4}>
              Results
            </Heading>
            <VStack spacing={4} align="stretch">
              {results.map((result, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth={1}
                  borderRadius="md"
                  borderColor={result.malicious ? 'red.200' : 'green.200'}
                  bg={result.malicious ? 'red.50' : 'green.50'}
                >
                  <Text fontWeight="bold">Source: {result.source}</Text>
                  <Text>Status: {result.malicious ? 'Malicious' : 'Clean'}</Text>
                  <Text>Confidence: {Math.round(result.confidence * 100)}%</Text>
                  {result.details && (
                    <Text>
                      Additional Details: {JSON.stringify(result.details, null, 2)}
                    </Text>
                  )}
                </Box>
              ))}
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
}
