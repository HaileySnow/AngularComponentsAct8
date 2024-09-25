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
  message: string = ''; 
  messageSent: boolean = false; 

  sendMessage() {
    this.messageSent = true; 
  }

}
