import React from 'react';
import { Box, Heading } from "@chakra-ui/react"
import { WarningIcon } from '@chakra-ui/icons'

const IconBox = ({ item }) => {
  return (
    <Box d="flex" flexDirection="column" alignItems="center" mt={6} mb={8}>
      <WarningIcon w={60} h={60} color={item.value}/>
      <Heading color={item.value} mt={2}>{item.label}</Heading>
    </Box>
  )
}

export default IconBox;
