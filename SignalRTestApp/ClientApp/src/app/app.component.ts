import { Component } from '@angular/core';
import { ListenerSetup } from './services/listeners-setup.service';
import { SignalRService } from './services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private readonly messageService: SignalRService, private readonly signalRServicesSetupService: ListenerSetup) { }

  ngOnInit() {
    this.messageService.init();
    this.signalRServicesSetupService.setupListeners();
    this.messageService.startConnection().subscribe(con => {
      
    });
  }
}
