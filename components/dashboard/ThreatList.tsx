import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useColorModeValue,
  IconButton,
  Tooltip,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiInfo, FiShield, FiAlertTriangle } from 'react-icons/fi';

const MotionBox = motion(Box);
const MotionTr = motion(Tr);

interface Threat {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  timestamp: string;
  status: 'active' | 'mitigated' | 'investigating';
}

const severityColors = {
  low: 'green',
  medium: 'yellow',
  high: 'orange',
  critical: 'red',
};

const statusColors = {
  active: 'red',
  mitigated: 'green',
  investigating: 'purple',
};

const ThreatList = ({ threats }: { threats: Threat[] }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      bg={bgColor}
      shadow="xl"
      rounded="xl"
      overflow="hidden"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Severity</Th>
              <Th>Source</Th>
              <Th>Timestamp</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {threats.map((threat, index) => (
              <MotionTr
                key={threat.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ backgroundColor: useColorModeValue('#F7FAFC', '#2D3748') }}
              >
                <Td>{threat.type}</Td>
                <Td>
                  <Badge
                    colorScheme={severityColors[threat.severity]}
                    rounded="full"
                    px={2}
                  >
                    {threat.severity}
                  </Badge>
                </Td>
                <Td>{threat.source}</Td>
                <Td>{threat.timestamp}</Td>
                <Td>
                  <Badge
                    colorScheme={statusColors[threat.status]}
                    rounded="full"
                    px={2}
                  >
                    {threat.status}
                  </Badge>
                </Td>
                <Td>
                  <HStack spacing={2}>
                    <Tooltip label="View Details">
                      <IconButton
                        aria-label="View details"
                        icon={<FiInfo />}
                        size="sm"
                        variant="ghost"
                      />
                    </Tooltip>
                    <Tooltip label="Mitigate Threat">
                      <IconButton
                        aria-label="Mitigate threat"
                        icon={<FiShield />}
                        size="sm"
                        variant="ghost"
                        colorScheme="green"
                      />
                    </Tooltip>
                    <Tooltip label="Mark as Critical">
                      <IconButton
                        aria-label="Mark as critical"
                        icon={<FiAlertTriangle />}
                        size="sm"
                        variant="ghost"
                        colorScheme="red"
                      />
                    </Tooltip>
                  </HStack>
                </Td>
              </MotionTr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </MotionBox>
  );
};

export default ThreatList;
