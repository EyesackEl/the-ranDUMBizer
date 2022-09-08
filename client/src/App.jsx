import React from 'react';
import { AppProvider } from './utils/GlobalState';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Container from './components/Container';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <AppProvider>
      <Container />
    </AppProvider>

    // </ApolloProvider>
  );
}

export default App;
