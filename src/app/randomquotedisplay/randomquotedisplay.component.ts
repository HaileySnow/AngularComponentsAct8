import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  standalone: true,
  imports: [],
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {

  quotesArray = [
		'True love is not measured by grand gestures but by the small, silent acts that speak volumes.',
		'To love is to stand in the chaos of life, holding each other steady through the storm.',
		'Love is the melody that plays between two souls, resonating even in the silence.',
		'In love, the beauty lies not in holding on, but in knowing when to let go with grace.',
		'Love is the infinite dance of patience, where two hearts learn to move in sync with time.',
		'A heart that loves truly is like an ocean — deep, vast, and unafraid of its own depth.',
		'To be loved is a gift, but to love without expectation is a rare form of freedom.',
		'Love is the silent promise between two souls, made not in words, but in actions.',
		'True love is not about ownership but about offering wings to fly, knowing they’ll always return.',
		'Love is a seed that grows in the heart and blossoms with trust, nurtured by kindness.',
	];
	Quotes = '';

	generateRandomQuote(): void {
		this. Quotes =
			this.quotesArray[
				Math.floor(Math.random() * this.quotesArray.length)
			];
	}

}
