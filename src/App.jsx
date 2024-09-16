import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Box textAlign="center" mt="10">
      <Heading>Book Management System</Heading>
      <Box mt="4">
        <Link to="/books">
          <Button colorScheme="teal" mr="4">
            View Books
          </Button>
        </Link>
        <Link to="/books/add">
          <Button colorScheme="blue">Add Book</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default App;
