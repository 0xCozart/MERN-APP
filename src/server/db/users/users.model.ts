import { model } from 'mongoose';
import { IUserDocument } from '../../@types/users.types';
import UserSchema from './user.schema';

export const UserModel = model<IUserDocument>('users', UserSchema);
