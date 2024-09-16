import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, Input, Heading } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navigate to Add Book page after login
      navigate('/books/add');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <Heading mb="4">Login</Heading>
      {error && <p>{error}</p>}
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} mb="2" />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} mb="2" />
      <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
      <Box mt="4">
        Don't have an account? <Link to="/register">Register</Link>
      </Box>
    </Box>
  );
};

export default Login;
