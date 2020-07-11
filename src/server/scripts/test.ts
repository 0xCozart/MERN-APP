import connectDB from '@database';
import UserModel from '@users.model';
const db = connectDB();

(async () => {
  db.on('open', () => console.log('Database opened for script injection'));

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
  console.log({ twenties, newUser, existingUser, numOfUsers });

  // test instance methods
  await existingUser.setLastUpdated();
  const siblings = await existingUser.sameLastName();
  console.log({ siblings });

  return db.close();
})();
