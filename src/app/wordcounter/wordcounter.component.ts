import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  standalone: true,
  imports: [],
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {

  @ViewChild('wordsInput') wordsInput!: ElementRef;
  result = 0;

  countWords(): void {
      this.result = String(this.wordsInput.nativeElement.value).split(
          ' '
      ).length;
  }

}
