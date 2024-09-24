import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  standalone: true,
  imports: [],
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {

  @ViewChild('numberChoice') numberChoice!: ElementRef;
    tableArray: string[] = [];

    showMultiplicationTable(): void {
        this.tableArray.length = 0;
        for (let i = 1; i <= 10; i++) {
            this.tableArray.push(
                `${this.numberChoice.nativeElement.value} x ${i} = ${
                    Number(this.numberChoice.nativeElement.value) * i
                }`
            );
        }
    }

}
