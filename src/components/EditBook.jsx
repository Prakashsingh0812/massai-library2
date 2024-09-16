import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Box, Button, Input, Select } from '@chakra-ui/react';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      const bookRef = doc(db, 'books', id);
      const bookDoc = await getDoc(bookRef);
      if (bookDoc.exists()) {
        const book = bookDoc.data();
        setTitle(book.title);
        setAuthor(book.author);
        setGenre(book.genre);
      }
    };

    fetchBook();
  }, [id]);

  const handleUpdateBook = async () => {
    const bookRef = doc(db, 'books', id);
    await updateDoc(bookRef, {
      title,
      author,
      genre,
    });
    alert('Book updated successfully!');
    navigate('/books');
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} mb="2" />
      <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} mb="2" />
      <Select placeholder="Select Genre" value={genre} onChange={(e) => setGenre(e.target.value)} mb="2">
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Science">Science</option>
        <option value="Fantasy">Fantasy</option>
      </Select>
      <Button colorScheme="blue" onClick={handleUpdateBook}>Update Book</Button>
    </Box>
  );
};

export default EditBook;
