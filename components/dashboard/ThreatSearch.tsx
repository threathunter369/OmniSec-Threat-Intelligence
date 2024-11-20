import { useState } from 'react';
import {
  Box,
  Input,
  Button,
  VStack,
  useColorModeValue,
  Text,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface ThreatSearchResult {
  type: string;
  severity: string;
  description: string;
  source: string;
}

const ThreatSearch = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState<ThreatSearchResult[]>([]);

  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');
  const borderColor = useColorModeValue('#E2E8F0', '#2D3748');
  const textColor = useColorModeValue('#4A5568', '#A0AEC0');

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Please enter a search query');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/threat-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch threat data');
      }

      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      setError('Error fetching threat data. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      rounded="xl"
      shadow="xl"
      p={6}
      w="full"
    >
      <VStack spacing={4} align="stretch">
        <Box>
          <Input
            placeholder="Search for threats (e.g., IP address, domain, malware)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="lg"
            bg={useColorModeValue('#F7FAFC', '#2D3748')}
            _focus={{
              borderColor: '#0080ff',
              boxShadow: '0 0 0 1px #0080ff',
            }}
          />
        </Box>

        <Button
          leftIcon={<SearchIcon />}
          colorScheme="blue"
          onClick={handleSearch}
          isLoading={isLoading}
          loadingText="Searching..."
          size="lg"
        >
          Search
        </Button>

        {error && (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {isLoading && (
          <Box textAlign="center" py={4}>
            <Spinner size="xl" color="blue.500" />
          </Box>
        )}

        {results.length > 0 && (
          <VStack spacing={4} align="stretch">
            {results.map((result, index) => (
              <Box
                key={index}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={borderColor}
                bg={useColorModeValue('#F7FAFC', '#2D3748')}
              >
                <Text fontWeight="bold" color={textColor}>
                  Type: {result.type}
                </Text>
                <Text color={textColor}>Severity: {result.severity}</Text>
                <Text color={textColor}>{result.description}</Text>
                <Text fontSize="sm" color={textColor} mt={2}>
                  Source: {result.source}
                </Text>
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default ThreatSearch;
