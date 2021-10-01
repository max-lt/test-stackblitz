// Import the functions you need from the SDKs you need
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK48NHPORCQfYH7xxfdNkX_n3RDe7UFP8",
  authDomain: "angular-ivy-ggrhw9.firebaseapp.com",
  projectId: "angular-ivy-ggrhw9",
  storageBucket: "angular-ivy-ggrhw9.appspot.com",
  messagingSenderId: "846311841404",
  appId: "1:846311841404:web:737b37da57b1c3447cb3f9",
  databaseURL: "https://angular-ivy-ggrhw9-default-rtdb.europe-west1.firebasedatabase.app/",
};

export interface IMessage {
  id: string | null;
  date: Date;
  user: string;
  message: string;
}

function unwrap(id: string | null, data: any): IMessage {
  return {
    id,
    date: new Date(data.date),
    user: data.user,
    message: data.message,
  };
}

@Injectable({ providedIn: "root" })
export class FirebaseService {
  private database: firebase.database.Database;
  public messages$: Observable<IMessage>;

  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    this.database = firebase.database();

    const messages$$ = new ReplaySubject<IMessage>(10);
    this.messages$ = messages$$.asObservable();

    this.database
      .ref("messages")
      .orderByChild("date")
      .limitToLast(10)
      .on("child_added", (doc) => messages$$.next(unwrap(doc.key, doc.val())));
  }

  public postMessage(data: Pick<IMessage, "user" | "message">): void {
    this.database
      .ref("messages")
      .push(Object.assign(data, { date: Date.now() }))
      .catch((err) => console.error(err));
  }
}
