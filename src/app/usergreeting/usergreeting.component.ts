import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  standalone: true,
  imports: [],
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  @ViewChild('name') name!: ElementRef;
    Greeting = '';

    greetUser(): void {
        this.Greeting = `Good day, ${this.name.nativeElement.value}`;
    }

}
