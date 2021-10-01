import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

import { query, ref } from "firebase/database";
import { DatabaseReference, push } from "firebase/database";
import { limitToLast, onChildAdded, orderByChild } from "firebase/database";
import { FirebaseService } from "./firebase.service";

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
export class MessageService {
  private messages: DatabaseReference;
  public messages$: Observable<IMessage>;

  constructor({ database }: FirebaseService) {
    const messages$$ = new ReplaySubject<IMessage>(10);
    this.messages$ = messages$$.asObservable();

    this.messages = ref(database, "messages");

    onChildAdded(
      query(this.messages, orderByChild("date"), limitToLast(10)),
      (doc) => messages$$.next(unwrap(doc.key, doc.val()))
    );
  }

  public postMessage(data: Pick<IMessage, "user" | "message">): Promise<void> {
    return Promise.resolve(
      push(this.messages, Object.assign(data, { date: Date.now() })).then()
    );
  }
}
