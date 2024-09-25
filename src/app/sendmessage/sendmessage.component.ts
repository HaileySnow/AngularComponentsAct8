import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sendmessage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sendmessage.component.html',
  styleUrl: './sendmessage.component.css'
})
export class SendmessageComponent {
  message: string = ''; // Holds the input message
  messageSent: boolean = false; // Tracks if the message was sent

  sendMessage() {
    this.messageSent = true; // Sets messageSent to true after sending
  }

}
