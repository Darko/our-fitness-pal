import mongoose, { Schema, Document } from 'mongoose';

export interface IBalance {
  amount?: number,
  currency?: string,
}

export interface IAccount {
  balance?: IBalance
}

export interface _Account extends Document, IAccount {
  _id: Schema.Types.ObjectId,
  balance?: IBalance
}

const AccountSchema: Schema = new Schema({
  balance: {
    amount: { type: Number, default: 0 },
    currency: { type: String, default: 'MKD' }
  },
});

export default mongoose.model<_Account>('Account', AccountSchema);
