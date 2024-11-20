import {
  Box,
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  Button,
  useColorMode,
  useColorModeValue,
  Divider,
  Text,
  useToast,
} from '@chakra-ui/react';

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  
  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');
  const borderColor = useColorModeValue('#E2E8F0', '#2D3748');
  const textColor = useColorModeValue('#4A5568', '#A0AEC0');

  const handleSaveSettings = () => {
    toast({
      title: 'Settings saved',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={8}>
      <Box
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
        rounded="xl"
        shadow="xl"
        p={6}
      >
        <VStack spacing={6} align="stretch">
          <Heading size="lg">Settings</Heading>
          
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Appearance
            </Text>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="dark-mode" mb="0">
                Dark Mode
              </FormLabel>
              <Switch
                id="dark-mode"
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
              />
            </FormControl>
          </Box>

          <Divider />

          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Notifications
            </Text>
            <VStack spacing={3} align="stretch">
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0">
                  Email Alerts
                </FormLabel>
                <Switch id="email-alerts" defaultChecked />
              </FormControl>
              
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="threat-alerts" mb="0">
                  Threat Alerts
                </FormLabel>
                <Switch id="threat-alerts" defaultChecked />
              </FormControl>
            </VStack>
          </Box>

          <Divider />

          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Security
            </Text>
            <VStack spacing={3} align="stretch">
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="two-factor" mb="0">
                  Two-Factor Authentication
                </FormLabel>
                <Switch id="two-factor" />
              </FormControl>
            </VStack>
          </Box>

          <Button colorScheme="blue" onClick={handleSaveSettings}>
            Save Settings
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Settings;
