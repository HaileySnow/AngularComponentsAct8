import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  standalone: true,
  imports: [],
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {

  @ViewChild('principal') principal!: ElementRef;
	@ViewChild('rate') rate!: ElementRef;
	@ViewChild('years') years!: ElementRef;
	@ViewChild('timesCompounded') timesCompounded!: ElementRef;
	
  hi: number = 0;
  bi: number | undefined | undefined;

	calculate() {
		const principalValue = Number(this.principal.nativeElement.value);
		const rateValue = Number(this.rate.nativeElement.value) / 100;
		const years = Number(this.years.nativeElement.value);
		const timesCompoundedValue = Number(
			this.timesCompounded.nativeElement.value,
		);

		const futureValue =
			principalValue *
			Math.pow(
				1 + rateValue / timesCompoundedValue,
				timesCompoundedValue * years,
			);

		this.hi = Number((futureValue - principalValue).toFixed(2));
	}

}
