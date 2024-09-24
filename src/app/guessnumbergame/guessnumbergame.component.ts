import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  standalone: true,
  imports: [],
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {

  numberToBeGuess = Math.round(Number(Math.random() * 10));
	@ViewChild('guess') guess!: ElementRef;
	result = '---';
	makeAGuess(): void {
		const guessNumber = Number(this.guess.nativeElement.value);
		if (guessNumber === this.numberToBeGuess) {
			this.result = `The guess: ${guessNumber} is correct!`;
		}
	}

}
