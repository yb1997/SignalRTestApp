import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ReceiveMessage } from '../models/receive-message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private readonly messageService: MessageService) { }

  messages: ReceiveMessage[] = [];

  text: string;

  ngOnInit() {
    this.messageService.message$.pipe(filter(m => m instanceof ReceiveMessage)).subscribe({
      next: (message: ReceiveMessage) => {
        this.messages.push(message);
      }
    });
  }

  handleSubmit() {
    if (!this.text) return;

    this.messageService.sendMessage("yogi", this.text);
  }
}
