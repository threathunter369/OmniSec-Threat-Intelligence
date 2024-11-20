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

const PrivacyPolicyPage = () => {
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
          <Heading size="xl">Privacy Policy</Heading>
          <Text color={textColor}>
            Last updated: {new Date().toLocaleDateString()}
          </Text>

          <VStack spacing={4} align="stretch">
            <Box>
              <Heading size="md" mb={2}>1. Information We Collect</Heading>
              <Text color={textColor}>
                We collect information that you provide directly to us, including:
              </Text>
              <UnorderedList mt={2} spacing={2} color={textColor}>
                <ListItem>Account information (name, email, password)</ListItem>
                <ListItem>Profile information</ListItem>
                <ListItem>Security preferences and settings</ListItem>
                <ListItem>Usage data and analytics</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="md" mb={2}>2. How We Use Your Information</Heading>
              <Text color={textColor}>
                We use the collected information for:
              </Text>
              <UnorderedList mt={2} spacing={2} color={textColor}>
                <ListItem>Providing and improving our services</ListItem>
                <ListItem>Personalizing your experience</ListItem>
                <ListItem>Analyzing usage patterns</ListItem>
                <ListItem>Communicating with you</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="md" mb={2}>3. Data Security</Heading>
              <Text color={textColor}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, modification, disclosure, or destruction.
              </Text>
            </Box>

            <Box>
              <Heading size="md" mb={2}>4. Your Rights</Heading>
              <Text color={textColor}>
                You have the right to:
              </Text>
              <UnorderedList mt={2} spacing={2} color={textColor}>
                <ListItem>Access your personal data</ListItem>
                <ListItem>Correct inaccurate data</ListItem>
                <ListItem>Request deletion of your data</ListItem>
                <ListItem>Object to data processing</ListItem>
                <ListItem>Data portability</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading size="md" mb={2}>5. Contact Us</Heading>
              <Text color={textColor}>
                If you have any questions about this Privacy Policy, please contact us at:
                privacy@omnisec-live.com
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default PrivacyPolicyPage;
