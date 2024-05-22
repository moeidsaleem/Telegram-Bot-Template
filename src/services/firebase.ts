import * as admin from 'firebase-admin';
import { FIREBASE_CONFIG } from '../config';

admin.initializeApp({
  credential: admin.credential.cert(FIREBASE_CONFIG),
});

export const db = admin.firestore();
