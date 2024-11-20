import { useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  useColorModeValue,
  Text,
  VStack,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const ThreatSearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
      setIsTyping(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsTyping(true);
  };

  const searchHints = [
    { type: 'URL', example: 'https://example.com' },
    { type: 'IP', example: '192.168.1.1' },
    { type: 'Domain', example: 'example.com' },
    { type: 'Hash', example: 'a1b2c3d4e5f6...' },
  ];

  return (
    <VStack spacing={2} w="full">
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        w="full"
        maxW="800px"
        mx="auto"
      >
        <InputGroup size="lg">
          <InputLeftElement>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="ghost"
              colorScheme="brand"
              onClick={handleSearch}
            />
          </InputLeftElement>
          <Input
            placeholder="Search for threats, IPs, URLs, or file hashes..."
            value={query}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsTyping(true)}
            onBlur={() => setTimeout(() => setIsTyping(false), 200)}
            bg={bgColor}
            borderWidth="2px"
            borderColor={borderColor}
            _hover={{ borderColor: 'brand.500' }}
            _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
            rounded="xl"
            fontSize="md"
            pl="50px"
            pr="50px"
          />
          {query && (
            <InputRightElement>
              <IconButton
                aria-label="Clear search"
                icon={<CloseIcon />}
                size="sm"
                variant="ghost"
                onClick={handleClear}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </MotionBox>

      <AnimatePresence>
        {isTyping && (
          <MotionBox
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            w="full"
            maxW="800px"
            mx="auto"
            p={4}
            bg={bgColor}
            rounded="xl"
            shadow="md"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Text fontSize="sm" color="gray.500" mb={2}>
              Search examples:
            </Text>
            <Box display="flex" flexWrap="wrap" gap={2}>
              {searchHints.map((hint) => (
                <Box
                  key={hint.type}
                  bg={useColorModeValue('gray.100', 'gray.700')}
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="sm"
                >
                  <Text as="span" fontWeight="bold">
                    {hint.type}:
                  </Text>{' '}
                  <Text as="span" color="gray.500">
                    {hint.example}
                  </Text>
                </Box>
              ))}
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
    </VStack>
  );
};

export default ThreatSearchBar;
