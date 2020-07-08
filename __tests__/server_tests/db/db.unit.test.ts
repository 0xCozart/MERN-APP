require('module-alias/register');
import UserModel from '@users.model';
import UserSchema from '@users.schema';
import { IUserDocument, IUserModel } from '@users.types';
import { setLastUpdated, setLastName } from '@users.methods';
import { findOneOrCreate, findByAge } from '@users.statics';

describe('Create users', () => {
  test('Should create a new user successfully!', () => {
    const mockUser = {
      firstName: 'Arthur',
      lastName: 'Dent',
      age: 42,
      dateOfEntry: new Date(),
      lastUpdated: new Date()
      // setLastUpdated: setLastUpdated,
      // setLastName: setLastName,
      // findOneOrCreate: findOneOrCreate,
      // findByAge: findByAge
    };
    // Creates a mock function, but also tracks calls to <UserModel['create']>.
    const spy = jest.spyOn(UserModel, 'create').mockReturnValue(mockUser);
  });
});
