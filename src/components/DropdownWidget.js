import React from 'react';
import { Select, Box, Text } from "@chakra-ui/react"

const DropdownWidget = ({ items, label, selected, onSelectedChange, itemType }) => {

  const handleChange = (event) => {
    onSelectedChange(JSON.parse(event.target.value))
  }

  const renderedOptions = items.map((item) => {
    if (item.label !== selected.label) {
      return (
        <option key={item.value} value={JSON.stringify(item)}>
          {item.label}
        </option>
      )
    }
  })


  return (
    <Box d="flex" flexDirection="column" alignItems="center">
      <Text mb={3}>{label}</Text>
      <Select placeholder={selected.label} mb={6} value={selected} onChange={handleChange}>
        {renderedOptions}
      </Select>
    </Box>
  )
}

export default DropdownWidget;
