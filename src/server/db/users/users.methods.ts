import { Document } from 'mongoose';
import { IUserDocument } from '.,/../../@types/users.types';

export async function setLastUpdated(this: IUserDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}

export async function sameLastName(this: IUserDocument): Promise<Document[]> {
  return this.model('users').find({ lastName: this.lastName });
}

db.createUser(
  {
    user: "AlanV",
    pwd: "burning27",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)


mogodb://AlanV:burning27@localhost:27017/