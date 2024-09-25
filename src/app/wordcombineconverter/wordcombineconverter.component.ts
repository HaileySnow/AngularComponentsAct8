import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-word-combine-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wordcombineconverter.component.html',
})
export class WordCombineConverterComponent {
  combinedWord: string = ''; // Stores the combined word

  combine(inputWord: string) {
    this.combinedWord = 'very ' + inputWord; // Combines 'very' with the input
  }
}
