import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { HttpLink,ApolloLink } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
  cache: new InMemoryCache()
});


export default Client;
