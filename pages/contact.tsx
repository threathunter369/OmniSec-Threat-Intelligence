import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const bgColor = useColorModeValue('#FFFFFF', '#1A202C');
  const borderColor = useColorModeValue('#E2E8F0', '#2D3748');
  const inputBgColor = useColorModeValue('#F7FAFC', '#2D3748');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement contact form submission
      toast({
        title: 'Message sent',
        description: "We'll get back to you soon!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxW="container.md" py={8}>
      <Box
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
        rounded="xl"
        shadow="xl"
        p={8}
      >
        <VStack spacing={6}>
          <Heading size="xl">Contact Us</Heading>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Your name"
                  bg={inputBgColor}
                  _focus={{
                    borderColor: '#0080ff',
                    boxShadow: '0 0 0 1px #0080ff',
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  bg={inputBgColor}
                  _focus={{
                    borderColor: '#0080ff',
                    boxShadow: '0 0 0 1px #0080ff',
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input
                  placeholder="Message subject"
                  bg={inputBgColor}
                  _focus={{
                    borderColor: '#0080ff',
                    boxShadow: '0 0 0 1px #0080ff',
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Your message"
                  rows={6}
                  bg={inputBgColor}
                  _focus={{
                    borderColor: '#0080ff',
                    boxShadow: '0 0 0 1px #0080ff',
                  }}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                width="full"
                isLoading={isSubmitting}
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Container>
  );
};

export default ContactPage;
