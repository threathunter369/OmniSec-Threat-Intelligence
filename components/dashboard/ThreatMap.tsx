import { Box, Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface ThreatLocation {
  latitude: number;
  longitude: number;
  intensity: number;
  country?: string;
  type?: string;
}

const ThreatMap = ({ threats = [] }: { threats?: ThreatLocation[] }) => {
  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');
  const borderColor = useColorModeValue('#E2E8F0', '#2D3748');
  const textColor = useColorModeValue('#4A5568', '#A0AEC0');
  const cardBgColor = useColorModeValue('#F7FAFC', '#2D3748');

  // Sample threats for demonstration
  const sampleThreats: ThreatLocation[] = [
    {
      latitude: 40.7128,
      longitude: -74.0060,
      intensity: 8,
      country: 'United States',
      type: 'DDoS Attack'
    },
    {
      latitude: 51.5074,
      longitude: -0.1278,
      intensity: 6,
      country: 'United Kingdom',
      type: 'Malware'
    },
    {
      latitude: 35.6762,
      longitude: 139.6503,
      intensity: 7,
      country: 'Japan',
      type: 'Phishing'
    },
  ];

  const displayThreats = threats.length > 0 ? threats : sampleThreats;

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
      <Text fontSize="xl" fontWeight="bold" mb={4} color={textColor}>
        Active Threats Map
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {displayThreats.map((threat, index) => (
          <MotionBox
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            p={4}
            bg={cardBgColor}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Text fontWeight="bold" color={textColor}>
              {threat.country || 'Unknown Location'}
            </Text>
            <Text fontSize="sm" color={textColor}>
              Type: {threat.type || 'Unknown Threat'}
            </Text>
            <Text fontSize="sm" color={textColor}>
              Intensity: {threat.intensity}/10
            </Text>
            <Text fontSize="xs" color={textColor}>
              Lat: {threat.latitude.toFixed(4)}, Long: {threat.longitude.toFixed(4)}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ThreatMap;
