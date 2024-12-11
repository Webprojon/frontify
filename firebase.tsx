import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDsePGygaYd9xLVjdBy5nN2v4YmG--C17E",
	authDomain: "frontify-c1ab9.firebaseapp.com",
	projectId: "frontify-c1ab9",
	storageBucket: "frontify-c1ab9.firebasestorage.app",
	messagingSenderId: "1038051806097",
	appId: "1:1038051806097:web:ec68460622c5745e70a830",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
