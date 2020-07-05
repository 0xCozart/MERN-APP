import UserModel from '../../../src/server/db/users/users.model';
import UserSchema from '../../../src/server/db/users/users.schema';

describe('Create users', () => {
  test('Should create a new user successfully!', () => {
    const mockUser = {
      firstName: 'Arthur',
      lastName: 'Dent',
      age: 42,
      dateOfEntry: new Date(),
      lastUpated: new Date()
    };
    const spy = jest.spyOn(UserModel, "create").
  });
});
