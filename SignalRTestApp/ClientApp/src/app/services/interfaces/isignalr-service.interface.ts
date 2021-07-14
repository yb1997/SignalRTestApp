export interface ISignalRService {
  setupListeners(con: signalR.HubConnection): void;
}
