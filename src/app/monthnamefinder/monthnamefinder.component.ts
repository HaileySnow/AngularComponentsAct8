import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-monthnamefinder',
  standalone: true,
  imports: [],
  templateUrl: './monthnamefinder.component.html',
  styleUrl: './monthnamefinder.component.css'
})
export class MonthnamefinderComponent {

  @ViewChild('monthNum') monthNum!: ElementRef;
	Result = '';

	getMonthName(): void {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		this.Result = months[Number(this.monthNum.nativeElement.value) - 1];
	}

  }
