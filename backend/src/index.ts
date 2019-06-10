import app from './app';
import config from './config';
import graphqlHttp from 'express-graphql';
import { gqlSchema } from './models/schema';
import './mongo';
import './routes';

app.use(
  '/gql',
  graphqlHttp({
    schema: gqlSchema,
    graphiql: true
  })
);

app.listen(config.port, () => {
  console.clear();
  console.log(`Example app listening on port http://localhost:${config.port}!`);
});
