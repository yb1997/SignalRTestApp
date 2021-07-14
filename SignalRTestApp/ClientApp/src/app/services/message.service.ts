import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { ReceiveMessage } from "../models/receive-message";
import { ISignalRService } from "./interfaces/isignalr-service.interface";
import { SignalRService } from "./signalr.service";

@Injectable({ providedIn: "root" })
export class MessageService implements ISignalRService {
  constructor(public readonly signalRService: SignalRService) { }

  private _message$ = new ReplaySubject(1);
  message$ = this._message$.asObservable().pipe();

  sendMessage(user: string, message: string) {
    this.signalRService.invoke("SendMessage", user, message);
  }

  // this method will be called by listers-setup service
  setupListeners(con: signalR.HubConnection) {
    con.on("ReceiveMessage", (user: string, message: string) => {
      this._message$.next(new ReceiveMessage(user, message));
    });
  }
}
