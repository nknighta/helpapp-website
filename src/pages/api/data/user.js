const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../../../credential/firebase-admin.json'); // 秘密鍵を取得
const admin = require('firebase-admin');

export default async function handler(
    req,
    res,
) {
    const COLLECTION_NAME = 'users';
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: cert(serviceAccount),
        });
    }
    if (req.method === 'POST') {
        try {
            const db = getFirestore();
            const userdata = await db.collection(COLLECTION_NAME).get();
            const data = [];
            const searchuserid = req.body.id;
            userdata.forEach((doc) => {
                if (doc.data().id === searchuserid) {
                    data.push(doc.data());
                }
            });
            res.status(200).json({data, searchuserid});
        } catch (error) {
            res.status(500).json({ message: 'error', error });
        }
    } else {
        res.status(400).json({ message: 'invalid method' });
    }
}