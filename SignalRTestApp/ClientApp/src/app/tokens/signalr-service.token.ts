import { InjectionToken } from "@angular/core";
import { ISignalRService } from "../services/interfaces/isignalr-service.interface";

export const SignalRToken = new InjectionToken<ISignalRService[]>("Service dependent on SignalR and are consumed directly by components");
