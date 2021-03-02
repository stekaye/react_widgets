import React from 'react';
import DOMPurify from 'dompurify';
import LinkContainer from './LinkContainer'
import { Box, Heading } from "@chakra-ui/react"

const ListItem = ({ title, description, id }) => {
  let clean = DOMPurify.sanitize( description );
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl" mb={4}>{title}</Heading>
      <span dangerouslySetInnerHTML={{__html: clean}}></span>
      <span>...</span>
      <LinkContainer href={`https://en.wikipedia.org?curid=${id}`} text="Learn More"/>
    </Box>
  )
}

export default ListItem;
