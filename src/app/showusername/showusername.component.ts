import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-showusername',
  standalone: true,
  imports: [],
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css'
})
export class ShowusernameComponent {

  @ViewChild('usernameField') usernameField!: ElementRef;
    Username = '';
    showMyUsername(): void {
        this.Username = this.usernameField.nativeElement.value;
    }

}
