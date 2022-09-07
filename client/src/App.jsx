import logo from './logo.svg';
import './App.css';

import Bulma from '';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Container from './components/container';

function App() {
	return <Container />;
}

export default App;
