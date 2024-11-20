import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSHWZCbUq-hU2tOR14f-rQEFXwJ1hcst0",
  authDomain: "omnisec-threat-intellige-c1cb8.firebaseapp.com",
  projectId: "omnisec-threat-intellige-c1cb8",
  storageBucket: "omnisec-threat-intellige-c1cb8.firebasestorage.app",
  messagingSenderId: "12962734943",
  appId: "1:12962734943:web:a046c9fcf5dc03301c8cea"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

// Set persistence to LOCAL
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

const db = getFirestore(app);

export { app, auth, db };
