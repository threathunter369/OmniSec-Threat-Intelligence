import { Box } from '@chakra-ui/react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';

export default function Home() {
  return (
    <Box minH="100vh" w="100%">
      <Hero />
      <Features />
    </Box>
  );
}
