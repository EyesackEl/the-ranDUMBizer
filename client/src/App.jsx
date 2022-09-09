import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Container from './components/Container';
import { AppProvider } from './utils/GlobalState';

function App() {
  return (
    <AppProvider>
      <Container />
    </AppProvider>
  );
}

export default App;
