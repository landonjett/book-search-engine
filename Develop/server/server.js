const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const app = express();

// Create an ApolloServer instance with the type definitions and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Apply the ApolloServer instance as middleware to the Express app
server.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`GraphQL playground at http://localhost:${PORT}${server.graphqlPath}`);
});
