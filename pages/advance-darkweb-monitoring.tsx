import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaUserSecret, FaGlobe, FaShieldAlt, FaFingerprint } from 'react-icons/fa';
import { RiAlertLine, RiSpyLine } from 'react-icons/ri';

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
        <Icon as={icon} w={10} h={10} color="purple.500" />
        <Heading size="md">{title}</Heading>
        <Text textAlign="center" color="gray.600">{description}</Text>
      </VStack>
    </MotionBox>
  );
};

export default function DarkwebMonitoring() {
  const features = [
    {
      title: 'Dark Web Intelligence',
      description: 'Advanced monitoring of dark web forums, marketplaces, and communication channels.',
      icon: FaUserSecret
    },
    {
      title: 'Credential Monitoring',
      description: 'Real-time detection of leaked credentials and sensitive information.',
      icon: FaFingerprint
    },
    {
      title: 'Brand Protection',
      description: 'Monitor and protect against brand impersonation and reputation threats.',
      icon: FaShieldAlt
    },
    {
      title: 'Threat Actor Tracking',
      description: 'Track and analyze threat actor behavior and emerging threats.',
      icon: RiSpyLine
    },
    {
      title: 'Global Coverage',
      description: 'Comprehensive monitoring across multiple languages and regions.',
      icon: FaGlobe
    },
    {
      title: 'Real-time Alerts',
      description: 'Instant notifications for critical security threats and data exposures.',
      icon: RiAlertLine
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
          bgGradient="linear(to-r, purple.400, red.500)"
          bgClip="text"
        >
          Advanced Darkweb Monitoring
        </Heading>
        <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
          Stay ahead of cyber threats with our advanced dark web monitoring solution.
          Protect your digital assets and sensitive information from underground threats.
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
