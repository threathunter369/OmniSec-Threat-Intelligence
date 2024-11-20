import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FiShield,
  FiTrendingUp,
  FiZap,
  FiLock,
  FiActivity,
  FiDatabase,
} from 'react-icons/fi';

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ElementType;
}

const features: FeatureProps[] = [
  {
    title: 'AI-Powered Threat Detection',
    text: 'Advanced machine learning algorithms detect and analyze potential security threats in real-time.',
    icon: FiShield,
  },
  {
    title: 'Real-time Monitoring',
    text: 'Continuous monitoring of your digital assets with instant alerts and notifications.',
    icon: FiActivity,
  },
  {
    title: 'Predictive Analysis',
    text: 'Stay ahead of threats with AI-driven predictive analysis and risk assessment.',
    icon: FiTrendingUp,
  },
  {
    title: 'Secure Authentication',
    text: 'Multi-factor authentication and robust security measures protect your account.',
    icon: FiLock,
  },
  {
    title: 'Instant Response',
    text: 'Automated response systems take immediate action to protect your assets.',
    icon: FiZap,
  },
  {
    title: 'Comprehensive Reports',
    text: 'Detailed security reports and analytics to track and improve your security posture.',
    icon: FiDatabase,
  },
];

export default function Features() {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box bg={bg} p={20}>
      <Container maxW={'6xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>Advanced Security Features</Heading>
          <Text color={color} fontSize={'xl'}>
            Comprehensive cybersecurity solutions powered by artificial intelligence
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.title} align={'top'}>
              <Box color={'blue.400'} px={2}>
                <Icon as={feature.icon} w={6} h={6} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={color}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
