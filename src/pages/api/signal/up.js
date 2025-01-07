const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../../../credential/firebase-admin.json'); // 秘密鍵を取得
const admin = require('firebase-admin');

export default async function handler(
    req,
    res,
) {
    const COLLECTION_NAME = 'signalsession';
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: cert(serviceAccount),
        });
    }
    if (req.method === 'POST') {
        try {
            const db = getFirestore();
            const userdata = await db.collection(COLLECTION_NAME).get();
            const insertData = {
                id: req.body.id,
                lat: req.body.latitude,
                lng: req.body.longitude,
                type: req.body.type,
                status: req.body.status,
            };
        } catch (error) {
            res.status(500).json({ message: 'error', error });
        }
    } else {
        res.status(400).json({ message: 'invalid method' });
    }
}