import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const bookSnapshot = await getDocs(collection(db, 'books'));
      const bookList = bookSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setBooks(bookList);
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'books', id));
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <Box>
      {books.map(book => (
        <Box key={book.id} p="4" shadow="md" borderWidth="1px">
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <Link to={`/books/${book.id}`}>
            <Button colorScheme="blue" mr="2">View Details</Button>
          </Link>
          <Link to={`/books/edit/${book.id}`}>
            <Button colorScheme="yellow" mr="2">Edit</Button>
          </Link>
          <Button colorScheme="red" onClick={() => handleDelete(book.id)}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
};

export default Books;
