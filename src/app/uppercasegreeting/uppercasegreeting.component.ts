import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  standalone: true,
  imports: [],
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {

  @ViewChild('userName') userName!: ElementRef;
	Results = '';
	transform(): void {
		this.Results = String(this.userName.nativeElement.value).toUpperCase();
	}

}
