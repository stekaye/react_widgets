import React from 'react';
import AccordionWidget from './components/AccordionWidget';
import swahiliItems from './data/swahiliItems';
import reactItems from './data/reactItems';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container centerContent mt={5}>
        <AccordionWidget items={reactItems} label="React"/>
        <AccordionWidget items={swahiliItems} label="Swahili"/>
      </Container>
    </ChakraProvider>
  )
}

export default App;
