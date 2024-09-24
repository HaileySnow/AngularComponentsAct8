import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  standalone: true,
  imports: [],
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  
  @ViewChild('word') word!: ElementRef;
  result = '';

  checkPalindrome(): void {
      this.result =
          this.reverser(this.word.nativeElement.value) ===
          this.word.nativeElement.value
              ? `Word: ${this.word.nativeElement.value} is a palindrome`
              : `Word: ${this.word.nativeElement.value} is not a palindrome`;
  }

  reverser(str: string): string {
      let reversedWord = '';
      for (let i = str.length - 1; i >= 0; i--) {
          reversedWord += str[i];
      }
      return reversedWord;
  }

}
