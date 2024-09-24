import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  standalone: true,
  imports: [],
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {

  @ViewChild('text') text!: ElementRef;
  count = 0;
  countTheCharacter(): void {
      this.count = Number(String(this.text.nativeElement.value).length);
  }

}
