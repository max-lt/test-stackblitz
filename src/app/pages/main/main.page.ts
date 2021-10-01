import { Component } from "@angular/core";
import { Observable, scan } from "rxjs";
import { FirebaseService } from "src/services/firebase.service";
import { IMessage } from "src/services/firebase.service";

@Component({
  templateUrl: "./main.page.html",
  styleUrls: ['./style.scss']
})
export class MainPage {
  public messages$: Observable<IMessage[]>;

  constructor(private firebase: FirebaseService) {
    this.messages$ = firebase.messages$.pipe(
      scan((acc, value) => (acc.push(value), acc), [] as Array<IMessage>)
    );
  }

  public onSubmit(msg: any) {
    console.log("POST", msg);
    this.firebase.postMessage(msg);
  }
}
