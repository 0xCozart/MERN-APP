import { connectDB, disconnectDB } from '../db/database';
import { UserModel } from '../db/users/users.model';

(async () => {
  connectDB();

  // test static methods
  const twenties = await UserModel.findByAge(20, 29);
  const newUser = await UserModel.findOneOrCreate({
    firstName: 'Mike',
    lastName: 'Smith',
    age: 57
  });

  const existingUser = await UserModel.findOneOrCreate({
    firstName: 'Emma',
    lastName: 'Bradley',
    age: 34
  });
  const numOfUsers = (await UserModel.find()).length;
  console.log({ twenties, newUser.toObject(), existingUser, numOfUsers });

  // test instance methods
  if (existingUser) {
    console.log('existing');
    await existingUser.setLastUpdated();
    const siblings = await existingUser.sameLastName();
    console.log({ siblings });
  }

  disconnectDB();
})();
