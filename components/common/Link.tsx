import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

interface LinkProps extends ChakraLinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ href, children, ...props }, ref) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <ChakraLink ref={ref} {...props}>{children}</ChakraLink>
    </NextLink>
  );
});

Link.displayName = 'Link';

export default Link;
