import 'module-alias/register';
import UserModel from '@users.model';
// import UserSchema from '@users.schema';
// import { IUserDocument, IUserModel } from '@users.types';
// import { setLastUpdated, setLastName } from '@users.methods';
// import { findOneOrCreate, findByAge } from '@users.statics';
import connectDB from '@database';
const db = connectDB();

describe('Users', () => {
  beforeAll(() => {
    db.on('open', () => {
      console.log('Database opened for testing...');
    });
  });

  beforeEach(() => {
    if (db.collection('users').countDocuments())
      return db.collection('users').deleteMany({});
  });

  afterAll(() => {
    return db.close();
  });

  describe('Create users', () => {
    test('Should create a new user successfully!', () => {
      const mockUser = {
        firstName: 'Arthur',
        lastName: 'Dent',
        age: 42,
        dateOfEntry: new Date(),
        lastUpdated: new Date()
      };
      // Creates a mock function, but also tracks calls to <UserModel['create']>.
      const mockUserSpy = UserModel.create(mockUser);
      const spy = jest
        .spyOn(UserModel, 'create')
        .mockReturnValueOnce(mockUserSpy);
      const spyCreatedUser = spy.mock.results[0].value;
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spyCreatedUser.name).toEqual(mockUser.firstName);
      spy.mockReset();
    });
  });
});
