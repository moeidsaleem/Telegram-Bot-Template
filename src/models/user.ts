import { db } from '../services/firebase';

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name?: string;
}

const usersCollection = db.collection('users');

export const addUser = async (user: User) => {
  await usersCollection.doc(user.id.toString()).set(user);
};

export const getUser = async (id: number) => {
  const doc = await usersCollection.doc(id.toString()).get();
  return doc.exists ? (doc.data() as User) : null;
};