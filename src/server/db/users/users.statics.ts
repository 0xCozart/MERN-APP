import { IUserDocument, IUserModel } from '../../@types/users.types';

interface queryParams {
  firstName: string;
  lastName: string;
  age: number;
}

export async function findOneOrCreate(
  this: IUserModel,
  { firstName, lastName, age }: queryParams
): Promise<IUserDocument> {
  const record = await this.findOne({ firstName, lastName, age });
  if (record) {
    return record;
  } else {
    return this.create({ firstName, lastName, age });
  }
}

export async function findByAge(
  this: IUserModel,
  min?: number,
  max?: number
): Promise<IUserDocument[]> {
  return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}
