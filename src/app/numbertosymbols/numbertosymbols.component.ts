import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-numbertosymbols',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numbertosymbols.component.html',
  styleUrl: './numbertosymbols.component.css'
})
export class NumbertosymbolsComponent {
  symbol: string = '';

  keySymbols: { [key: number]: string } = {
    1: '!', 2: '@', 3: '#', 4: '$', 5: '%',
    6: '^', 7: '&', 8: '*', 9: '(', 0: ')'
  };

  getSymbol(input: string): void {
    const number = Number(input);
    if (this.keySymbols[number] !== undefined) {
      this.symbol = this.keySymbols[number];
    } else {
      this.symbol = 'Invalid input, enter a number between 0 and 9';
    }
  }

}
