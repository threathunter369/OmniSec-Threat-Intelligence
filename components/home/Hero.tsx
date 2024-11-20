import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiShield, FiTrendingUp, FiZap } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={{ base: 20, md: 28 }}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                color={'blue.400'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                  opacity: 0.3,
                }}
              >
                OmniSec Live
              </Text>
              <br />
              <Text as={'span'} color={'blue.400'}>
                AI-Powered Security
              </Text>
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'xl'}>
              Advanced threat detection and cybersecurity intelligence platform powered by AI.
              Protect your digital assets with real-time monitoring and predictive analysis.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                onClick={() => router.push('/signup')}
              >
                Get Started
              </Button>
              <Button
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                onClick={() => router.push('/signin')}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Stack direction={'row'} spacing={12} align={'center'}>
              <FeatureIcon icon={FiShield} text="Threat Detection" />
              <FeatureIcon icon={FiTrendingUp} text="Real-time Analysis" />
              <FeatureIcon icon={FiZap} text="Instant Response" />
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

interface FeatureIconProps {
  icon: React.ElementType;
  text: string;
}

function FeatureIcon({ icon, text }: FeatureIconProps) {
  return (
    <Stack align={'center'} spacing={2}>
      <Icon as={icon} w={10} h={10} color={'blue.400'} />
      <Text fontWeight={600} fontSize={'sm'}>
        {text}
      </Text>
    </Stack>
  );
}
