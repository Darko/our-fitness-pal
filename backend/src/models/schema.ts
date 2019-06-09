import mongoose, { Schema, Document } from 'mongoose';

export interface SomeInterface extends Document, IAccount {
  memes: boolean;
}

const SomeSchema: Schema = new Schema({
  memes: { type: Boolean, default: true }
});

export default mongoose.model<SomeInterface>('SomeSchema', SomeSchema);
