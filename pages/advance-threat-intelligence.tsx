import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaBrain, FaGlobe, FaChartBar, FaDatabase } from 'react-icons/fa';
import { RiRadarLine, RiFileWarningLine } from 'react-icons/ri';

const MotionBox = motion(Box);

const FeatureCard = ({ title, description, icon }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      p={6}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      shadow="md"
    >
      <VStack spacing={4}>
        <Icon as={icon} w={10} h={10} color="teal.500" />
        <Heading size="md">{title}</Heading>
        <Text textAlign="center" color="gray.600">{description}</Text>
      </VStack>
    </MotionBox>
  );
};

export default function ThreatIntelligence() {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms for predictive threat detection and analysis.',
      icon: FaBrain
    },
    {
      title: 'Global Threat Monitoring',
      description: 'Real-time monitoring of global cyber threats and attack patterns.',
      icon: FaGlobe
    },
    {
      title: 'Threat Analytics',
      description: 'Comprehensive analytics and visualization of threat landscapes.',
      icon: FaChartBar
    },
    {
      title: 'Threat Intelligence Database',
      description: 'Extensive database of known threats, vulnerabilities, and attack vectors.',
      icon: FaDatabase
    },
    {
      title: 'Early Warning System',
      description: 'Advanced detection and early warning of emerging threats.',
      icon: RiRadarLine
    },
    {
      title: 'Actionable Intelligence',
      description: 'Detailed threat reports with actionable recommendations.',
      icon: RiFileWarningLine
    }
  ];

  return (
    <Container maxW="container.xl" py={20}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        mb={16}
        textAlign="center"
      >
        <Heading
          as="h1"
          size="2xl"
          mb={6}
          bgGradient="linear(to-r, teal.400, green.500)"
          bgClip="text"
        >
          Advanced Threat Intelligence
        </Heading>
        <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
          Harness the power of AI-driven threat intelligence to protect your organization.
          Stay ahead of emerging threats with predictive analytics and real-time monitoring.
        </Text>
      </MotionBox>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {features.map((feature, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FeatureCard {...feature} />
          </MotionBox>
        ))}
      </SimpleGrid>
    </Container>
  );
}
