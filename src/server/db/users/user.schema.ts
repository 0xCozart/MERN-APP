import { Schema } from 'mongoose';
import { findOneOrCreate, findByAge } from './users.statics';
import { setLastUpdated, sameLastName } from './users.method';

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
});
// Schema static methods
UserSchema.statics.findOneOrCreate = findOneOrCreate;
UserSchema.statics.findByAge = findByAge;

// Schema instance methods
UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.sameLastName = sameLastName;

export default UserSchema;
