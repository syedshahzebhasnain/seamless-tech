import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const AUTH_TOKEN = import.meta.env.VITE_GRAPHQL_AUTH_TOKEN

const httpLink = new HttpLink({
  uri: 'https://gateway.thegraph.com/api/[api-key]/subgraphs/id/71ZTy1veF9twER9CLMnPWeLQ7GZcwKsjmygejrgKirqs',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
})