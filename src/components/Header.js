import React from 'react';
import Link from './Link';
import { HStack, Box } from "@chakra-ui/react"

const Header = () => {
  return (
    <HStack spacing="40px" mb={12}>
      <Box>
        <Link href="/">
          Accordion
        </Link>
      </Box>

      <Box>
        <Link href="/accordion-swahili">
          Accordion 2
        </Link>
      </Box>

      <Box>
        <Link href="/list">
          Search
        </Link>
      </Box>

      <Box>
        <Link href="/dropdown">
          Dropdown
        </Link>
      </Box>

      <Box>
        <Link href="/translate">
          Translate
        </Link>
      </Box>
    </HStack>
  )
}

export default Header;
