import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-word-combine-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wordcombineconverter.component.html',
})
export class WordCombineConverterComponent {
  combinedWord: string = ''; 
  combine(inputWord: string) {
    this.combinedWord = 'very ' + inputWord; 
  }
}
