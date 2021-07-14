import { Injectable } from "@angular/core";
import * as signalR from '@microsoft/signalr';
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment.prod";

@Injectable({ providedIn: "root" })
export class SignalRService {
  connection: signalR.HubConnection;

  constructor() {}

  init() {
    this.startChatHub();
  }

  startChatHub() {
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.baseUrl + "chathub")
      .build();

  }

  startConnection() {
    return from(this.connection.start()).pipe(map(_ => this.connection));
  }

  invoke(methodName: string, ...params: any[]) {
    this.connection.invoke(methodName, ...params);
  }
}
