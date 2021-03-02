import React from 'react';
import { LinkBox, LinkOverlay, Button } from "@chakra-ui/react"

const LinkContainer = ({ href, text }) => {
  return (
    <LinkBox display="block" mt={5}>
      <LinkOverlay href={href}>
        <Button>{text}</Button>
      </LinkOverlay>
    </LinkBox>
  )
}

export default LinkContainer;
