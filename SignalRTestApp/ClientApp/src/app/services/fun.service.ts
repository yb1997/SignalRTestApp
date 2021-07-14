import { Injectable } from "@angular/core";
import { HubConnection } from "@microsoft/signalr";
import { ISignalRService } from "./interfaces/isignalr-service.interface";
import { SignalRService } from "./signalr.service";

@Injectable({ providedIn: "root" })
export class FunService implements ISignalRService {
  constructor(private readonly signalR: SignalRService) { }


  setupListeners(con: HubConnection): void {
      // set up some listeners
  }

  doSomething() {
    console.log("did something");
  }
}
