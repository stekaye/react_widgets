import React, {useState} from 'react';
import DropdownWidget from './DropdownWidget';
import TranslatedText from './TranslatedText';
import languageItems from '../data/languageItems';
import { Input, Box } from "@chakra-ui/react"

const TranslateWidget = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState(languageItems[0]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <Box w="30vw">
      <Box mb={8}>
        <Input 
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <DropdownWidget
          label="Select a Target Language"
          itemType="Language"
          items={languageItems}
          selected={language}
          onSelectedChange={setLanguage}
        />
      </Box>
      <TranslatedText searchTerm={searchTerm} language={language}/>
    </Box>
  )
}

export default TranslateWidget;
