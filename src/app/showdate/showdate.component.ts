import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  standalone: true,
  imports: [],
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {

  date = '';
    showDate(): void {
        this.date = String(new Date().toISOString()).substring(0, 10);
    }

}
