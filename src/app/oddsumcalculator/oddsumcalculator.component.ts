import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  standalone: true,
  imports: [],
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {

  @ViewChild('number') number!: ElementRef;
	Results = 0;

	calculate(): void {
		const inputNumber = Number(this.number.nativeElement.value);
		this.Results = 0;
		for (let i = 1; i <= inputNumber; i += 2) {
			this.Results += i;
		}
	}

}
