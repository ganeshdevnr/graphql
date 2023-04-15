import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing');
});

// created a response
const root = {
    product: () => { 
        return { 
            "id": 234325, 
            "name": "widget", 
            "description": "Beautiful widget to use in your garden",
            "price": 23.44,
            "soldout": false
        };
     }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running server on port localhost:8080'));