import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { Database } from "firebase/database";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCK48NHPORCQfYH7xxfdNkX_n3RDe7UFP8",
  authDomain: "angular-ivy-ggrhw9.firebaseapp.com",
  projectId: "angular-ivy-ggrhw9",
  storageBucket: "angular-ivy-ggrhw9.appspot.com",
  messagingSenderId: "846311841404",
  appId: "1:846311841404:web:737b37da57b1c3447cb3f9",
  databaseURL:
    "https://angular-ivy-ggrhw9-default-rtdb.europe-west1.firebasedatabase.app/",
};

@Injectable({ providedIn: "root" })
export class FirebaseService {
  public readonly database: Database;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.database = getDatabase(app);
  }
}
