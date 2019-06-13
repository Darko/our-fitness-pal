import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';
import mongoose, { Document, Schema } from 'mongoose';

interface IExercise extends Document {
  _id: Schema.Types.ObjectId;
  name: string;
  muscleGroup: string;
  type: string;
  complexity: number;
}

const ExerciseSchema = new Schema({
  name: { type: String, required: true },
  muscleGroup: { type: String, required: true },
  type: { type: String, required: true },
  complexity: { type: Number }
});

const ExerciseType = new GraphQLObjectType({
  name: 'exercise',
  fields: () => ({
    id: { type: GraphQLID },
    muscleGroup: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    complexity: { type: GraphQLInt }
  })
});

export const Exercise = mongoose.model<IExercise>('Exercise', ExerciseSchema);

export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    exercise: {
      args: { name: { type: GraphQLString } },
      resolve: (...[, args]) => {
        return Exercise.findOne({ name: args.name });
      },
      type: ExerciseType
    },
    getAllExercises: {
      type: new GraphQLList(ExerciseType),
      resolve: () => Exercise.find({})
    }
  }
});

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addExercise: {
      type: ExerciseType,
      args: {
        muscleGroup: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLString }
      },
      resolve: (...[, args]) => {
        const { name, type, muscleGroup } = args;
        const exercise = new Exercise({
          name,
          muscleGroup,
          type
        });
        return exercise.save();
      }
    },
    updateExercise: {
      type: ExerciseType,
      args: {
        _id: { type: GraphQLNonNull(GraphQLString) },
        muscleGroup: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLString }
      },
      resolve: (...[, args]) => {
        const { _id, ...rest } = args;
        return Exercise.findOneAndUpdate({ _id }, rest);
      }
    }
  }
});

export const gqlSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
