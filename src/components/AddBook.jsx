import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, Input, Heading, Select } from '@chakra-ui/react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState(''); // New state for genre
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'books'), {
        title,
        author,
        genre, // Add genre to Firestore document
      });
      setTitle('');
      setAuthor('');
      setGenre(''); // Clear genre input after submission
      navigate('/books'); // Optionally, navigate to show books page after adding the book
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <Heading mb="4">Add a New Book</Heading>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} mb="2" />
        <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} mb="2" />
        
        {/* Genre input field */}
        <Select placeholder="Select genre" value={genre} onChange={(e) => setGenre(e.target.value)} mb="2">
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Biography">Biography</option>
        </Select>

        <Button colorScheme="blue" type="submit" mb="4">Add Book</Button>
      </form>
      <Link to="/books">
        <Button colorScheme="green">Show Books</Button>
      </Link>
    </Box>
  );
};

export default AddBook;
