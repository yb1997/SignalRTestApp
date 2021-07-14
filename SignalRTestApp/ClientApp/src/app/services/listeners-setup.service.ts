import { Inject, Injectable } from "@angular/core";
import { SignalRToken } from "../tokens/signalr-service.token";
import { ISignalRService } from "./interfaces/isignalr-service.interface";
import { SignalRService } from "./signalr.service";

@Injectable({ providedIn: "root" })
export class ListenerSetup {
  constructor(
    private readonly signalR: SignalRService,
    @Inject(SignalRToken)
    private readonly signalRServices: ISignalRService[]
  ) { }

  private get con() {
    return this.signalR.connection;
  }

  setupListeners() {
    if (!this.con) throw new Error("Connection is not created yet!");

    this.signalRServices.forEach(ss => {
      ss.setupListeners(this.con);
    });
  }
}
