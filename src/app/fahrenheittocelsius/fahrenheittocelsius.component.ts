import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  standalone: true,
  imports: [],
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrl: './fahrenheittocelsius.component.css'
})
export class FahrenheittocelsiusComponent {

  @ViewChild('fahrenheit') fahrenheit!: ElementRef;
  celsius = 0;
  convertToCelsius(): void {
      this.celsius =
          (Number(this.fahrenheit.nativeElement.value) - 32) * 5/9;
  }

}
