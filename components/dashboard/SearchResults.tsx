import {
  Box,
  VStack,
  Heading,
  Text,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiCheckCircle, FiShield } from 'react-icons/fi';

const MotionBox = motion(Box);

interface SearchResult {
  query: string;
  timestamp: string;
  results: {
    url?: any;
    ip?: any;
    hash?: any;
    domain?: any;
  };
  summary: {
    threatLevel: 'low' | 'medium' | 'high' | 'critical';
    recommendations: string[];
  };
}

interface SearchResultsProps {
  results: SearchResult | null;
  isLoading: boolean;
  error: string | null;
}

const threatLevelColors = {
  low: 'green',
  medium: 'yellow',
  high: 'orange',
  critical: 'red',
};

const SearchResults = ({ results, isLoading, error }: SearchResultsProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  if (isLoading) {
    return (
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={8}
      >
        <Spinner size="xl" color="brand.500" thickness="4px" />
      </MotionBox>
    );
  }

  if (error) {
    return (
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        p={8}
        bg={bgColor}
        rounded="xl"
        shadow="xl"
        borderWidth="1px"
        borderColor={borderColor}
      >
        <VStack spacing={4} align="center">
          <FiAlertTriangle size={40} color="red" />
          <Text color="red.500">{error}</Text>
        </VStack>
      </MotionBox>
    );
  }

  if (!results) return null;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={6} align="stretch">
        {/* Summary Section */}
        <Box
          p={6}
          bg={bgColor}
          rounded="xl"
          shadow="xl"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <VStack spacing={4} align="stretch">
            <Heading size="md">Analysis Summary</Heading>
            <Box>
              <Text fontWeight="bold" mb={2}>
                Threat Level:{' '}
                <Badge
                  colorScheme={threatLevelColors[results.summary.threatLevel]}
                  fontSize="md"
                  px={2}
                  rounded="full"
                >
                  {results.summary.threatLevel.toUpperCase()}
                </Badge>
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2}>
                Recommendations:
              </Text>
              <List spacing={2}>
                {results.summary.recommendations.map((rec, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <ListIcon
                      as={FiShield}
                      color={`${threatLevelColors[results.summary.threatLevel]}.500`}
                    />
                    {rec}
                  </ListItem>
                ))}
              </List>
            </Box>
          </VStack>
        </Box>

        {/* Detailed Results */}
        <Accordion allowMultiple>
          {Object.entries(results.results).map(([type, data]) => (
            <AccordionItem
              key={type}
              border="1px"
              borderColor={borderColor}
              rounded="lg"
              mb={4}
            >
              <AccordionButton
                p={4}
                _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
              >
                <Box flex="1" textAlign="left">
                  <Heading size="sm" textTransform="capitalize">
                    {type} Analysis
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack align="stretch" spacing={4}>
                  {type === 'ip' && (
                    <>
                      <Box>
                        <Text fontWeight="bold">AbuseIPDB Score:</Text>
                        <Badge
                          colorScheme={
                            data.abuseipdb.data.abuseConfidenceScore > 50
                              ? 'red'
                              : 'green'
                          }
                        >
                          {data.abuseipdb.data.abuseConfidenceScore}%
                        </Badge>
                      </Box>
                      <Box>
                        <Text fontWeight="bold">AlienVault Analysis:</Text>
                        <Text>{data.alienvault.reputation || 'No data'}</Text>
                      </Box>
                    </>
                  )}

                  {(type === 'url' || type === 'domain') && (
                    <Box>
                      <Text fontWeight="bold">VirusTotal Analysis:</Text>
                      {data.data?.attributes?.last_analysis_stats && (
                        <List spacing={2}>
                          <ListItem>
                            <ListIcon
                              as={FiAlertTriangle}
                              color="red.500"
                            />
                            Malicious: {data.data.attributes.last_analysis_stats.malicious}
                          </ListItem>
                          <ListItem>
                            <ListIcon
                              as={FiCheckCircle}
                              color="green.500"
                            />
                            Clean: {data.data.attributes.last_analysis_stats.harmless}
                          </ListItem>
                        </List>
                      )}
                    </Box>
                  )}

                  {type === 'hash' && (
                    <Box>
                      <Text fontWeight="bold">File Analysis:</Text>
                      {data.data?.attributes?.last_analysis_stats && (
                        <List spacing={2}>
                          <ListItem>
                            <ListIcon
                              as={FiAlertTriangle}
                              color="red.500"
                            />
                            Detection Rate:{' '}
                            {`${data.data.attributes.last_analysis_stats.malicious}/${
                              data.data.attributes.last_analysis_stats.total
                            }`}
                          </ListItem>
                        </List>
                      )}
                    </Box>
                  )}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </MotionBox>
  );
};

export default SearchResults;
