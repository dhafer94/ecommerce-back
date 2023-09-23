// import { ApolloServer } from 'apollo-server';

// import typeDefs from './schema';
// import resolvers from './resolvers';

// const server = new ApolloServer({
// 	typeDefs: typeDefs,
// 	resolvers: resolvers,
// 	cors: {
// 		origin: [
// 			'https://e-commerce-deployment.netlify.app',
// 			'http://localhost:3000',
// 		],
// 		// origin: '*',
// 		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// 		allowedHeaders: ['Content-Type', 'Authorization'],
// 	},
// });

// server.listen().then(({ url }) => {
// 	console.log(`🚀  Server ready at ${url}`);
// });

import express from 'express';
import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();

// Create an instance of the Apollo server.
const server = new ApolloServer({
	typeDefs,
	resolvers,
	cors: {
		origin: [
			'https://e-commerce-deployment.netlify.app',
			'http://localhost:3000',
		],
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		allowedHeaders: ['Content-Type', 'Authorization'],
	},
});

// Apply the Apollo server middleware to the Express application.
app.use(server.getMiddleware());

// Start the Express server.
app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
