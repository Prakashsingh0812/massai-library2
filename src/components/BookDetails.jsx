import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { Box, Heading, Text } from '@chakra-ui/react';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const bookRef = doc(db, 'books', id);
      const bookDoc = await getDoc(bookRef);
      if (bookDoc.exists()) {
        setBook(bookDoc.data());
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <Heading>{book.title}</Heading>
      <Text mt="4">Author: {book.author}</Text>
      <Text>Genre: {book.genre}</Text>
    </Box>
  );
};

export default BookDetails;
