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

  spacedWord: string = ''; 

  convert(inputWord: string) {
    this.spacedWord = inputWord.split('').join(' '); 
  }

}
