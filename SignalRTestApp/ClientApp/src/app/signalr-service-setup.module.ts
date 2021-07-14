import { NgModule } from '@angular/core';
import { FunService } from './services/fun.service';
import { MessageService } from './services/message.service';
import { SignalRToken } from './tokens/signalr-service.token';

@NgModule({
  providers: [
    {
      provide: SignalRToken,
      useExisting: MessageService,
      multi: true
    },
    {
      provide: SignalRToken,
      useExisting: FunService,
      multi: true
    },
  ]
})
export class SignalrServiceSetupModule {
}
