import React, { useState } from 'react';
import { Select, Box, Text } from "@chakra-ui/react"
import { WarningIcon } from '@chakra-ui/icons'

const DropdownWidget = ({ items }) => {

  const [colorChoice, setColorChoice] = useState('Select Colour');

  const renderedOptions = items.map(item => {
    return (
      <option key={item.value} value={item.value}>{item.label}</option>
    )
  })

  const handleChange = (event) => {
    console.log(event)
    setColorChoice(event.target.value)
  }


  return (
    <Box d="flex" flexDirection="column" alignItems="center">
      <Text mb={6}>Change the Colour of the Warning Icon</Text>
      <Select placeholder="Select Colour" mb={6} onChange={handleChange}>
        {renderedOptions}
      </Select>
      <Box d="flex" flexDirection="column" alignItems="center" mt={10}>
        <WarningIcon w={60} h={60} color={colorChoice}/>
      </Box>
    </Box>
  )
}

export default DropdownWidget;
