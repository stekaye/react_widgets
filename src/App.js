import React, {useState} from 'react';
import AccordionWidget from './components/AccordionWidget';
import ListWidget from './components/ListWidget'
import DropdownWidget from './components/DropdownWidget';
import IconBox from './components/IconBox';
import TranslateWidget from './components/TranslateWidget';
import Header from './components/Header';
import Route from './components/Route';
import swahiliItems from './data/swahiliItems';
import reactItems from './data/reactItems';
import colorItems from './data/colorItems'
import { ChakraProvider, theme, Container, Heading, Text } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

const App = () => {
  const [selectedColor, setSelectedColor] = useState({label: 'Ugly Red', value: 'red'});

  return (
    <ChakraProvider theme={theme}>
      <Container centerContent mt={5}>
        <Heading mb={2}>React Widgets</Heading>
        <Text mb={16}>Reusable Components Built with Hooks, Chakra and Love</Text>
        <Header/>
        <Route path="/">
          <AccordionWidget items={reactItems} label="React"/>
        </Route>
        <Route path="/accordion-swahili">
          <AccordionWidget items={swahiliItems} label="React"/>
        </Route>
        <Route path="/list">
          <ListWidget items={reactItems} label="React"/>
        </Route>
        <Route path="/dropdown">
          <DropdownWidget 
            label='Change the Colour of the Warning Icon'
            itemType="Colour"
            items={colorItems}
            selected={selectedColor} 
            onSelectedChange={setSelectedColor}
          />
          <IconBox item={selectedColor}/>
        </Route>
        <Route path="/translate">
          <TranslateWidget/>
        </Route>
      </Container>
    </ChakraProvider>
  )
}

export default App;
