import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wordspacer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wordspacer.component.html',
  styleUrl: './wordspacer.component.css'
})
export class WordspacerComponent {

  spacedWord: string = ''; // Holds the result

  convert(inputWord: string) {
    this.spacedWord = inputWord.split('').join(' '); // Splits and adds space between each letter
  }

}
