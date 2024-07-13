// src/App.js
import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Stack, 
  Table, 
  Tbody, 
  Td, 
  Th, 
  Thead, 
  Tr 
} from '@chakra-ui/react';

const App = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddItem = () => {
    if (editingIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editingIndex] = itemName;
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems([...items, itemName]);
    }
    setItemName('');
  };

  const handleEditItem = (index) => {
    setItemName(items[index]);
    setEditingIndex(index);
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <Box p={4}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Item Name</FormLabel>
          <Input 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
          />
        </FormControl>
        <Button onClick={handleAddItem}>
          {editingIndex !== null ? 'Update Item' : 'Add Item'}
        </Button>
      </Stack>
      <Box mt={6}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, index) => (
              <Tr key={index}>
                <Td>{item}</Td>
                <Td>
                  <Button 
                    mr={2} 
                    onClick={() => handleEditItem(index)}
                  >
                    Edit
                  </Button>
                  <Button 
                    colorScheme="red" 
                    onClick={() => handleDeleteItem(index)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default App;
