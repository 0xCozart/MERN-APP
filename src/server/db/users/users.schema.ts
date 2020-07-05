import { Schema } from 'mongoose';
import { findOneOrCreate, findByAge } from './users.statics';
import { setLastUpdated, sameLastName } from './users.method';

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  dateOfEntry: {
    type: Date,
    default: new Date(),
    required: true
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
    required: true
  }
});

// Schema static methods
UserSchema.statics.findOneOrCreate = findOneOrCreate;
UserSchema.statics.findByAge = findByAge;

// Schema instance methods
UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.sameLastName = sameLastName;

export default UserSchema;
