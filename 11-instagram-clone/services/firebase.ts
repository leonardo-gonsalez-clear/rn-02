import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC-Rvc9ll5SsvmsIQIgLvZIZT5csvTKjIY",
  authDomain: "lambe-a52d9.firebaseapp.com",
  databaseURL: "https://lambe-a52d9-default-rtdb.firebaseio.com",
  projectId: "lambe-a52d9",
  storageBucket: "lambe-a52d9.appspot.com",
  messagingSenderId: "367277025287",
  appId: "1:367277025287:web:c39171c53a8f626803a2a2"
}

const app = initializeApp(firebaseConfig)

const db = getDatabase(app)
const storage = getStorage(app)

export { db, storage }
