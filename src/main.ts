import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers,
	cors: {
		origin: [
			'https://e-commerce-deployment.netlify.app',
			'http://localhost:3000',
		],
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		allowedHeaders: ['Content-Type', 'Authorization'],
	},
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
