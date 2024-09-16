import React from 'react';
import { Button } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
  );
};

export default LogoutButton;
