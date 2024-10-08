import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wordreverser',
  standalone: true,
  imports: [],
  templateUrl: './wordreverser.component.html',
  styleUrl: './wordreverser.component.css'
})
export class WordreverserComponent {

  @ViewChild('inputWord') inputWord!: ElementRef;
  Result = '';

  reverseTheWord(): void {
      this.Result = this.reverser(this.inputWord.nativeElement.value);
  }

  reverser(str: string): string {
      let reversedWord = '';
      for (let i = str.length - 1; i >= 0; i--) {
          reversedWord += str[i];
      }
      return reversedWord;
  }

}
