import { model } from 'mongoose';
import { IUserDocument, IUserModel } from '../../@types/users.types';
import UserSchema from './users.schema';

export const UserModel = model<IUserDocument>(
  'users',
  UserSchema
) as IUserModel;
