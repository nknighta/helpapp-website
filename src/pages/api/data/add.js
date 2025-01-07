const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../../../credential/firebase-admin.json'); // 秘密鍵を取得
const admin = require('firebase-admin');

export default async function handler(
  req,
  res,
) {
  const COLLECTION_NAME = 'user';
  //　初期化する
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    });
  }
  const db = getFirestore();
  if (req.method === 'POST') {
    try {
      const docRef = db.collection(COLLECTION_NAME).doc();
      const insertData = {
        id: req.body.id,
        name: req.body.name,
        lat: req.body.latitude,
        lng: req.body.longitude,
      };
      docRef.set(insertData);
      res.status(200).json({ message: 'success', insertData });
    } catch (error) {
      res.status(400).json({ message: 'invaid format', error });
    }
  }
}