import React from 'react';
import AccordionWidget from './components/AccordionWidget';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend Javascript framework.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  }
];

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container centerContent mt={5}>
        <AccordionWidget items={items}/>
      </Container>
    </ChakraProvider>
  )
}

export default App;
