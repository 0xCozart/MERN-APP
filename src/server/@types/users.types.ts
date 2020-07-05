import { Document, Model } from 'mongoose';

// Schema interface
export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  dateOfEntry?: Date;
  lastUpdated?: Date;
}

// Document instance methods
export interface IUserDocument extends IUser, Document {
  setLastUpdated: (this: IUserDocument) => Promise<void>;
  sameLastName: (this: IUserDocument) => Promise<Document[]>;
}

// Model static methods
export interface IUserModel extends Model<IUserDocument> {
  findOneOrCreate: (
    this: IUserModel,
    {
      firstName,
      lastName,
      age
    }: { firstName: string; lastName: string; age: number }
  ) => Promise<IUserDocument>;
  findByAge: (
    this: IUserModel,
    min?: number,
    max?: number
  ) => Promise<IUserDocument[]>;
}
