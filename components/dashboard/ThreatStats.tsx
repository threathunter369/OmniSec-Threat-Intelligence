import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiShield, FiAlertTriangle, FiActivity, FiLock } from 'react-icons/fi';

const MotionBox = motion(Box);

interface StatsCardProps {
  title: string;
  stat: string;
  helpText: string;
  icon: any;
  delay: number;
}

function StatsCard({ title, stat, helpText, icon, delay }: StatsCardProps) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      px={4}
      py={5}
      bg={bgColor}
      shadow="xl"
      border="1px"
      borderColor={borderColor}
      rounded="lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Stat position="relative">
        <Box
          position="absolute"
          top={2}
          right={2}
          p={2}
          bg={useColorModeValue('brand.50', 'brand.900')}
          rounded="full"
        >
          <Icon as={icon} w={6} h={6} color="brand.500" />
        </Box>
        <StatLabel fontSize="xl" fontWeight="medium" isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize="4xl" fontWeight="bold" mt={2}>
          {stat}
        </StatNumber>
        <StatHelpText fontSize="sm" color="gray.500">
          {helpText}
        </StatHelpText>
      </Stat>
    </MotionBox>
  );
}

const ThreatStats = () => {
  const stats = [
    {
      title: 'Threats Detected',
      stat: '2,847',
      helpText: 'Last 30 days',
      icon: FiAlertTriangle,
    },
    {
      title: 'Protection Score',
      stat: '94%',
      helpText: 'Current security rating',
      icon: FiShield,
    },
    {
      title: 'Active Monitors',
      stat: '156',
      helpText: 'Across all systems',
      icon: FiActivity,
    },
    {
      title: 'Security Events',
      stat: '12.4K',
      helpText: 'Total events analyzed',
      icon: FiLock,
    },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} mb={8}>
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          stat={stat.stat}
          helpText={stat.helpText}
          icon={stat.icon}
          delay={index * 0.1}
        />
      ))}
    </SimpleGrid>
  );
};

export default ThreatStats;
