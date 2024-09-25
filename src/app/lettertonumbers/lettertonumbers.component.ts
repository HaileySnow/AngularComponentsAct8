import { Component } from '@angular/core';

@Component({
  selector: 'app-lettertonumbers',
  standalone: true,
  imports: [],
  templateUrl: './lettertonumbers.component.html',
  styleUrl: './lettertonumbers.component.css'
})
export class LettertonumbersComponent {

  outputNumbers: string = '';

  convert(inputText: string): void {
    this.outputNumbers = inputText
      .toLowerCase()
      .split('')
      .map(letter => letter.charCodeAt(0) - 96) // Convert letter to number
      .filter(num => num > 0) // Filter out non-letter characters
      .join(' ');
  }

}


