import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Grid,
  GridItem,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import ThreatSearchBar from '../components/dashboard/ThreatSearchBar';
import ThreatStats from '../components/dashboard/ThreatStats';
import SearchResults from '../components/dashboard/SearchResults';

const ThreatMap = dynamic(() => import('../components/dashboard/ThreatMap'), {
  ssr: false,
});

const ThreatList = dynamic(() => import('../components/dashboard/ThreatList'), {
  ssr: false,
});

interface Threat {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  timestamp: string;
  status: 'active' | 'mitigated' | 'investigating';
}

const mockThreats: Threat[] = [
  {
    id: "1",
    type: "Malware Detected",
    severity: "high",
    source: "192.168.1.100",
    timestamp: "2024-02-20 14:30:00",
    status: "active",
  },
  {
    id: "2",
    type: "Suspicious Login",
    severity: "medium",
    source: "203.0.113.45",
    timestamp: "2024-02-20 14:15:00",
    status: "investigating",
  },
  {
    id: "3",
    type: "Port Scan",
    severity: "low",
    source: "198.51.100.67",
    timestamp: "2024-02-20 14:00:00",
    status: "mitigated",
  },
];

const mockThreatLocations = [
  { latitude: 40.7128, longitude: -74.006, intensity: 1 },
  { latitude: 51.5074, longitude: -0.1278, intensity: 2 },
  { latitude: 35.6762, longitude: 139.6503, intensity: 1.5 },
  { latitude: -33.8688, longitude: 151.2093, intensity: 1 },
  { latitude: 48.8566, longitude: 2.3522, intensity: 2 },
];

const MotionBox = motion(Box);

const Dashboard = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const toast = useToast();
  const [isClient, setIsClient] = useState(false);
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  if (loading || isLoading) {
    return (
      <Box minH="100vh" bg={bgColor} display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" thickness="4px" />
          <Text>Loading dashboard...</Text>
        </VStack>
      </Box>
    );
  }

  if (!isClient || !user) {
    return (
      <Box minH="100vh" bg={bgColor} display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" thickness="4px" />
          <Text>Initializing...</Text>
        </VStack>
      </Box>
    );
  }

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    setSearchError(null);
    setSearchResults(null);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Search failed. Please try again.');
      }

      const data = await response.json();
      setSearchResults(data);

      // Show toast notification based on threat level
      const threatLevel = data.summary.threatLevel;
      toast({
        title: `Threat Level: ${threatLevel.toUpperCase()}`,
        description: data.summary.recommendations[0],
        status: threatLevel === 'low' ? 'success' : 
                threatLevel === 'medium' ? 'warning' : 'error',
        duration: 5000,
        isClosable: true,
      });
    } catch (error: any) {
      setSearchError(error.message);
      toast({
        title: 'Search Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <Box minH="100vh" bg={bgColor} py={8} suppressHydrationWarning>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
          >
            <Heading size="xl" mb={2}>
              Security Dashboard
            </Heading>
            <Text color="gray.500">
              Real-time threat intelligence and security monitoring
            </Text>
          </MotionBox>

          <ThreatSearchBar onSearch={handleSearch} />
          
          {(searchResults || isSearching || searchError) ? (
            <SearchResults
              results={searchResults}
              isLoading={isSearching}
              error={searchError}
            />
          ) : (
            <>
              <ThreatStats />
              <Grid
                templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                gap={8}
                w="full"
              >
                <GridItem colSpan={1}>
                  <ThreatMap threats={mockThreatLocations} />
                </GridItem>
                <GridItem colSpan={1}>
                  <ThreatList threats={mockThreats} />
                </GridItem>
              </Grid>
            </>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Dashboard;
