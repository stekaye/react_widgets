import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text } from "@chakra-ui/react"

const AccordionWidget = ({ items }) => {

  const renderedItems = items.map(item => {
    return (
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {item.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {item.content}
        </AccordionPanel>
      </AccordionItem>
    )
  })

  return (
    <Box>
      <Text textAlign="center">Accordion</Text>
      <Accordion allowMultiple mt={5} w='500px'>
        {renderedItems}
      </Accordion>
    </Box>
  )
}

export default AccordionWidget;
