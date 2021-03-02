import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import { Input, Text, Container, Box, VStack, StackDivider } from "@chakra-ui/react"

const ListWidget = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const URL = 'https://en.wikipedia.org/w/api.php';

  useEffect(() => {
    const getResults = async() => {
      const {data} = await axios.get(URL, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchTerm
        }
      })
      setResults(data.query.search);
    }
    
    if (searchTerm && !results.length) {
      getResults();
    } else {
      const timeoutId = setTimeout(() => {
        if (searchTerm) {getResults()};
      }, 500)

      return () => {
        clearTimeout(timeoutId)
      }
    }

  }, [searchTerm, results.length])

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const renderedResults = results.map(result => {
    return (
      <ListItem 
        title={result.title}
        description={result.snippet}
        key={result.pageid}
        id={result.pageid}
      />
    )
  })

  return (
    <Container>
      <Box>
        <Text mb="8px">Enter Search Term</Text>
        <Input
          value={searchTerm}
          onChange={handleChange}
          placeholder="Type here"
          size="sm"
        />
      </Box>
      <VStack 
        mt={10}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {renderedResults}
      </VStack>
    </Container>
  )
}

export default ListWidget;
