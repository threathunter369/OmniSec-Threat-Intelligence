import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Link as ChakraLink,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const SocialButton = ({ label, href, icon }: { label: string; href: string; icon: any }) => {
  return (
    <Tooltip label={label} hasArrow>
      <ChakraLink
        href={href}
        isExternal
        _hover={{
          color: 'blue.500',
          transform: 'translateY(-2px)',
        }}
        transition="all 0.3s ease"
      >
        <Icon as={icon} w={6} h={6} />
      </ChakraLink>
    </Tooltip>
  );
};

const Footer = () => {
  const footerBg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const linkColor = useColorModeValue('gray.600', 'gray.400');

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/omnisec_live', icon: FaTwitter },
    { label: 'GitHub', href: 'https://github.com/omnisec-live', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/omnisec-live', icon: FaLinkedin },
  ];

  return (
    <MotionBox
      as="footer"
      bg={footerBg}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt="auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={8}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Flex
          gap={{ base: 4, md: 6 }}
          direction={{ base: 'column', sm: 'row' }}
          align={'center'}
          wrap={'wrap'}
          justify={'center'}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <ChakraLink
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  color: 'blue.500',
                  bg: useColorModeValue('gray.100', 'gray.700'),
                }}
                color={linkColor}
              >
                {link.label}
              </ChakraLink>
            </Link>
          ))}
        </Flex>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={borderColor}
      >
        <Container
          as={Stack}
          maxW={'7xl'}
          py={6}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Flex align="center" gap={2}>
            <Icon as={FaShieldAlt} w={5} h={5} color="blue.400" />
            <Text> {new Date().getFullYear()} OmniSec Live. All rights reserved</Text>
          </Flex>
          <Stack direction={'row'} spacing={6}>
            {socialLinks.map((social) => (
              <SocialButton
                key={social.label}
                label={social.label}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </MotionBox>
  );
};

export default Footer;
