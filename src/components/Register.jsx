import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, Input, Heading } from '@chakra-ui/react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Navigate to Add Book page after registration
      navigate('/books/add');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <Heading mb="4">Register</Heading>
      {error && <p>{error}</p>}
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} mb="2" />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} mb="2" />
      <Button colorScheme="blue" onClick={handleRegister}>Register</Button>
      <Box mt="4">
        Already have an account? <Link to="/login">Login</Link>
      </Box>
    </Box>
  );
};

export default Register;
