import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaShieldAlt, FaLock, FaUserShield, FaChartLine } from 'react-icons/fa';

const AboutPage = () => {
  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');
  const borderColor = useColorModeValue('#E2E8F0', '#2D3748');
  const textColor = useColorModeValue('#4A5568', '#A0AEC0');

  const features = [
    {
      icon: FaShieldAlt,
      title: 'Advanced Threat Detection',
      description: 'Real-time monitoring and detection of cyber threats using AI.',
    },
    {
      icon: FaLock,
      title: 'Secure Analysis',
      description: 'State-of-the-art security analysis and vulnerability assessment.',
    },
    {
      icon: FaUserShield,
      title: 'User Protection',
      description: 'Comprehensive protection for users and organizations.',
    },
    {
      icon: FaChartLine,
      title: 'Threat Intelligence',
      description: 'Advanced threat intelligence gathering and analysis.',
    },
  ];

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8}>
          <Box textAlign="center">
            <Heading size="2xl" mb={4}>About OmniSec Live</Heading>
            <Text fontSize="xl" color={textColor}>
              Your Advanced AI-Powered Cybersecurity Intelligence Platform
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
            {features.map((feature, index) => (
              <Box
                key={index}
                bg={bgColor}
                p={6}
                rounded="lg"
                shadow="md"
                borderWidth="1px"
                borderColor={borderColor}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
              >
                <Icon as={feature.icon} w={10} h={10} color="blue.400" mb={4} />
                <Heading size="md" mb={2}>
                  {feature.title}
                </Heading>
                <Text color={textColor}>{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>

          <Box
            bg={bgColor}
            p={8}
            rounded="lg"
            shadow="md"
            borderWidth="1px"
            borderColor={borderColor}
            w="full"
          >
            <Heading size="lg" mb={4}>Our Mission</Heading>
            <Text color={textColor} fontSize="lg" lineHeight="tall">
              OmniSec Live is dedicated to providing cutting-edge cybersecurity solutions 
              powered by artificial intelligence. Our mission is to protect organizations 
              and individuals from emerging cyber threats through advanced threat detection, 
              real-time monitoring, and intelligent analysis.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutPage;
