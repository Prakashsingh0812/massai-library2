import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Books from './components/Books';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookDetails from './components/BookDetails';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Add Book comes first after login/register */}
          <Route path="/books/add" element={<PrivateRoute><AddBook /></PrivateRoute>} />
          {/* Show books after adding */}
          <Route path="/books" element={<PrivateRoute><Books /></PrivateRoute>} />
          <Route path="/books/edit/:id" element={<PrivateRoute><EditBook /></PrivateRoute>} />
          <Route path="/books/:id" element={<PrivateRoute><BookDetails /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  </ChakraProvider>
);
