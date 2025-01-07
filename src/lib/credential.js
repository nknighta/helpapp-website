/**
 * 
 * {
  "type": "service_account",
  "project_id": "machinaka-61733",
  "private_key_id": "c1059efe3eece94a4345a6ed045a38487ee98982",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsHK/c9tU9A5Bn\nhK8/ZJ/w1Ak/kZ4pjfiq6YzHnF1m50uRplhX2ub9M+Cj+d2ISl2nkkt4Fe2QOSGZ\nfZKqfFrZHr6JUSSMUUiPLI+7E0W4uPmDDaQGTJhB2Nk/gDz/5KyjdKlCJdiUigwL\nSAbhmZiaxOxXy/fDGg8vw2gC6o65yv2qtSiahREKgx0Tu2tr0SXlTh/vUbnULzN2\nGj9suTTtYQzpdhTCfxNsOOhFxH7jwzw2VTR1AGdZbYIxNnhx637H/bU9hymvG3gE\noBl3b34yRM0yjDTdKkS9C7/8N555hL+E9A3EZXAE8KFm3taEWYOuiyUlxJR/Wy8N\nJPPwo1kjAgMBAAECggEAG4gVO7gCYVm2GlEXxYC/swMAHbqZ/dS3kAN/IRkqucDL\nDlf5LsiWBa/sQd7A6MHYnGsjBmkfkOAKt2ZmdT4iPDQWT5n6yjVgcYKz1T2efA+e\n3i9q6xUKkBHzopxNZbO7SARr5Ohv7kbs6UsSyrjKuAtDMUIv9nYvMrlD5J+HyEFk\naDKq799bt9PeU0UVuyEhK9rwGxFQQZX5GJ4Mk6nryVzR+G9Rb5vepgoa2/1FZv5w\nvC3a/APkP5wqgXH4ncdfV0BgJvU0qrx7TCjXw7QBNhAKX1rDhkYPnhUoiyO7O/6K\npICkG0W4h+hujmsrAPngOhWj5eJ8M3sSE9eCMIwF9QKBgQDp/lrBkGt6AoAgs0ts\nAaEJIGLvRJuScPDy6kXixAeGjNq/Um8lZITcPrm7/m0HFVItbuPiFDDkG2gUssW7\nn4T/4MRd2w3vn5efzbDEbvQXJ8e8Aq252t4lXOKyRAuptINafU55mdIYwXdA2xSP\n88a6kiW976wb2f7KMTIRtplnZQKBgQC8THgFFJGSddkBWtkANAReuecmUBsIzg9W\nkfrLENSQvL3ZUsSdg+rl+TV0F/cJ6bjLzmAjiGjY7f0r0L8MghwizX4xqS7kLeOX\niVvgv0dOU7QoodGKjQu+YOke50H2BYn7FeaXsm/KiCeGQM4cgtpHyYIJBn4zOP5X\nbkFLGzqJ5wKBgHPbJZKLcDuj+061l5VtpQ9AwtuXS7QRSavsxReHWfaLzU9HgJKy\nF3p5cDsduVv1eY/XROvOdXqr+zesYG0Kia6r2m5iJJ9NlKRiErDgAuloH+P+K4hH\nTxCO0gvT1zZ6k0L9ohphR/5L5EDveFniKLZ94EQP5FaR9C6mdxUAJSplAoGBAIZ3\nkUoHe0F9GQAHsWmcu/Ytie1pTTUHehqXWuLC3RmTP3w/yBq4Rvn98nc6WfdhSc95\nTFxzoHQx2Bb/Fj/HdnJADztFly/puVrRA6TG1BQSYFiX3nyz5swIhtHD0e3v3K5K\n4IY6Le0TOC5+fvILW/fh5hOt6FeJ/s/O85/ADRjHAoGARo7UA2eOFkiH+KhCaVef\nNsw6M5wdM1/5sxsOTMXaGQoR8GQd+d14UjgZYowshs8xgbebdDJS1aTgnWioxz6V\nbzXQzYzZALkxN8Yh6UMX3wFg67caAoCWdkt9heMvuKTAsUq51gYNYfPN8hVzsqgB\nBWmE0pahweIkl72mjpKyZLk=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-wykbo@machinaka-61733.iam.gserviceaccount.com",
  "client_id": "111302711293678096009",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wykbo%40machinaka-61733.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
 */

export const firebaseConfig = {
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
/** 
const credential = () => {
    type: firebaseConfig.type,
    project_id: firebaseConfig.project_id,
    private_key_id: firebaseConfig.private_key_id,
    private_key: firebaseConfig.private_key,
    client_email: firebaseConfig.client_email,
    client_id: firebaseConfig.client_id,
    auth_uri: firebaseConfig.auth_uri,
    token_uri: firebaseConfig.token_uri,
    auth_provider_x509_cert_url: firebaseConfig.auth_provider_x509_cert_url,
    client_x509_cert_url: firebaseConfig.client_x509_cert_url,
    universe_domain:  firebaseConfig.universe_domain
}
    */