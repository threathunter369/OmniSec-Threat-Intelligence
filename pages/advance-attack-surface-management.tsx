import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSearch, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';
import { RiRadarLine } from 'react-icons/ri';
import { MdSecurity } from 'react-icons/md';

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
        <Icon as={icon} w={10} h={10} color="blue.500" />
        <Heading size="md">{title}</Heading>
        <Text textAlign="center" color="gray.600">{description}</Text>
      </VStack>
    </MotionBox>
  );
};

export default function AttackSurfaceManagement() {
  const features = [
    {
      title: 'Asset Discovery',
      description: 'Continuous discovery and monitoring of all digital assets across your infrastructure.',
      icon: FaSearch
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Automated scanning and assessment of security vulnerabilities in real-time.',
      icon: FaExclamationTriangle
    },
    {
      title: 'Risk Scoring',
      description: 'Advanced risk scoring and prioritization based on threat intelligence.',
      icon: FaChartLine
    },
    {
      title: 'Attack Surface Monitoring',
      description: '24/7 monitoring of your external attack surface for potential threats.',
      icon: RiRadarLine
    },
    {
      title: 'Security Posture Management',
      description: 'Comprehensive management and improvement of your security posture.',
      icon: MdSecurity
    },
    {
      title: 'Threat Prevention',
      description: 'Proactive threat prevention through continuous monitoring and analysis.',
      icon: FaShieldAlt
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
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          Advanced Attack Surface Management
        </Heading>
        <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
          Comprehensive visibility and control over your entire digital attack surface.
          Protect your organization with real-time monitoring, assessment, and threat prevention.
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
