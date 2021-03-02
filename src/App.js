import React, {useState} from 'react';
// import AccordionWidget from './components/AccordionWidget';
// import ListWidget from './components/ListWidget'
// import DropdownWidget from './components/DropdownWidget';
// import IconBox from './components/IconBox';
import TranslateWidget from './components/TranslateWidget';
// import swahiliItems from './data/swahiliItems';
// import reactItems from './data/reactItems';
// import colorItems from './data/colorItems'
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

const App = () => {
  const [selectedColor, setSelectedColor] = useState({label: 'Ugly Red', value: 'red'});

  return (
    <ChakraProvider theme={theme}>
      <Container centerContent mt={5}>
        {/* <AccordionWidget items={reactItems} label="React"/> */}
        {/* <AccordionWidget items={swahiliItems} label="Swahili"/> */}
        {/* <ListWidget/> */}
        {/* <DropdownWidget 
          label='Change the Colour of the Warning Icon'
          itemType="Colour"
          items={colorItems}
          selected={selectedColor} 
          onSelectedChange={setSelectedColor}
        /> */}
        {/* <IconBox item={selectedColor}/> */}
        <TranslateWidget/>
      </Container>
    </ChakraProvider>
  )
}

export default App;
