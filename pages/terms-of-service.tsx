import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';

const TermsOfServicePage = () => {
  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');
  const borderColor = useColorModeValue('#E2E8F0', '#2D3748');
  const textColor = useColorModeValue('#4A5568', '#A0AEC0');

  return (
    <Container maxW="container.lg" py={8}>
      <Box
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
        rounded="xl"
        shadow="xl"
        p={8}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="xl">Terms of Service</Heading>
          <Text color={textColor}>
            Last updated: {new Date().toLocaleDateString()}
          </Text>

          <VStack spacing={4} align="stretch">
            <Box>
              <Heading size="md" mb={2}>1. Acceptance of Terms</Heading>
              <Text color={textColor}>
                By accessing and using OmniSec Live ("the Service"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the Service.
              </Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>2. Use License</Heading>
              <Text color={textColor}>
                We grant you a limited, non-exclusive, non-transferable license to use the Service subject to these Terms. You may not:
              </Text>
              <UnorderedList mt={2} spacing={2} color={textColor}>
                <ListItem>Modify or copy the materials</ListItem>
                <ListItem>Use the materials for any commercial purpose</ListItem>
                <ListItem>Attempt to reverse engineer any software</ListItem>
                <ListItem>Remove any copyright or proprietary notations</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="md" mb={2}>3. Service Description</Heading>
              <Text color={textColor}>
                OmniSec Live provides cybersecurity threat detection and analysis services. We reserve the right to:
              </Text>
              <UnorderedList mt={2} spacing={2} color={textColor}>
                <ListItem>Modify or discontinue any part of the Service</ListItem>
                <ListItem>Restrict access to certain features</ListItem>
                <ListItem>Update pricing and subscription terms</ListItem>
                <ListItem>Limit service availability by region</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="md" mb={2}>4. User Obligations</Heading>
              <Text color={textColor}>
                As a user of the Service, you agree to:
              </Text>
              <UnorderedList mt={2} spacing={2} color={textColor}>
                <ListItem>Provide accurate account information</ListItem>
                <ListItem>Maintain the security of your account</ListItem>
                <ListItem>Comply with all applicable laws</ListItem>
                <ListItem>Not misuse or abuse the Service</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="md" mb={2}>5. Limitation of Liability</Heading>
              <Text color={textColor}>
                OmniSec Live shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.
              </Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>6. Governing Law</Heading>
              <Text color={textColor}>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which OmniSec Live operates, without regard to its conflict of law provisions.
              </Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>7. Contact Information</Heading>
              <Text color={textColor}>
                For any questions regarding these Terms of Service, please contact us at:
                legal@omnisec-live.com
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default TermsOfServicePage;
