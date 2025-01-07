const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const admin = require('firebase-admin');

const firebaseConfig = {
    type: process.env.NEXT_PUBLIC_TYPE || "",
    project_id: process.env.NEXT_PUBLIC_PROJECT_ID  || "",
    private_key_id: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID  || "",
    private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY  || "",
    client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL  || "",
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID  || "",
    auth_uri: process.env.NEXT_PUBLIC_AUTH_URI || "",
    token_uri: process.env.NEXT_PUBLIC_TOKEN_URI || "",
    auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_AUTH_PROVIDER_X509_CERT_URL || "",
    client_x509_cert_url: process.env.NEXT_PUBLIC_CLIENT_X509_CERT_URL || "",
    universe_domain: process.env.NEXT_PUBLIC_UNIVERSE_DOMAIN || ""
};

export default async function handler(
    req,
    res,
) {
    const COLLECTION_NAME = 'users';
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: cert(firebaseConfig),
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