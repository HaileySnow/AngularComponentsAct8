import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  standalone: true,
  imports: [],
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {

  @ViewChild('text') text!: ElementRef;
	result = '';

	convert(): void {
		this.result = String(this.text.nativeElement.value).toUpperCase();
	}

}
