const serviceAccount = require('../credential/firebase-admin.json'); // 秘密鍵を取得

const firebaseConfig = require('../src/lib/credential');

console.log(firebaseConfig.auth_provider_x509_cert_url);
console.log(firebaseConfig.auth_uri);
console.log(firebaseConfig.client_email);
console.log(firebaseConfig.client_id);
console.log(firebaseConfig.client_x509_cert_url);
console.log(firebaseConfig.private_key);
console.log(firebaseConfig.private_key_id);
console.log(firebaseConfig.project_id);
console.log(firebaseConfig.token_uri);
console.log(firebaseConfig.type);