import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDIUtdjh9_j1zhdzJ-ApsZEMNSASWVIuA8",
  authDomain: "churnanalytics-ab296.firebaseapp.com",
  projectId: "churnanalytics-ab296",
  storageBucket: "churnanalytics-ab296.firebasestorage.app",
  messagingSenderId: "905093666312",
  appId: "1:905093666312:web:7e2def2313c67ff85ea3bd",
  measurementId: "G-5CLPM2TQJC"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Configuração do Auth com persistência para React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Configuração do Firestore
const db = getFirestore(app);

// Exportando auth e db para uso em outros arquivos
export { auth, db };
