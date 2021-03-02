import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Box, Heading, Text } from "@chakra-ui/react"

const TranslatedText = ({searchTerm, language }) => {

  const [results, setResults] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect( () => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm)
    }, 500)

    return () => {
      clearTimeout(timerId);
    }
  }, [searchTerm])

  useEffect( () => {
    const getTranslation = async() => {
      const { data } =  await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedTerm,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      });
      setResults(data.data.translations[0].translatedText)
    }
    getTranslation();

  }, [debouncedTerm, language])

  const renderedResults = (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl" textAlign="center">Results</Heading>
      <Text mt={4}>{results}</Text>
    </Box>
  )

  return results && renderedResults;
}

export default TranslatedText;



