import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  standalone: true,
  imports: [],
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {

  @ViewChild('inputNumber') inputNumber!: ElementRef;
  Result = '';
  evenOrOdd(): void {
      this.Result =
          Number(this.inputNumber.nativeElement.value) % 2 !== 0
              ? (this.Result = 'odd')
              : (this.Result = 'even');
  }

}
