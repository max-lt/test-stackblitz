import { Component } from "@angular/core";
import { Observable, scan } from "rxjs";
import { IMessage } from "../../../services/message.service";
import { MessageService } from "../../../services/message.service";

@Component({
  templateUrl: "./main.page.html",
  styleUrls: ['./style.scss']
})
export class MainPage {
  public messages$: Observable<IMessage[]>;

  constructor(private messageService: MessageService) {
    this.messages$ = messageService.messages$.pipe(
      scan((acc, value) => (acc.push(value), acc), [] as Array<IMessage>)
    );
  }

  public onSubmit(msg: any) {
    console.log("POST", msg);
    this.messageService.postMessage(msg);
  }
}
