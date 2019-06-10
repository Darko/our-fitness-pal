import mongoose, { Schema, Document } from 'mongoose';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema
} from 'graphql';

interface GoodMeme {
  id: number;
  name: string;
}

const db: GoodMeme[] = [{ id: 1, name: 'Pepe the Frog' }];

const MemeType = new GraphQLObjectType({
  name: 'meme',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    meme: {
      type: MemeType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        console.log(args);
        return db.find(meme => {
          return meme.id === Number(args.id);
        });
      }
    }
  }
});

export const gqlSchema = new GraphQLSchema({
  query: RootQuery
});
