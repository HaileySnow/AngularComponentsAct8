import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-textlength',
  standalone: true,
  imports: [],
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
 
  @ViewChild('inputText') inputText!: ElementRef;
  Length = 0;

  countLength(): void {
      this.Length = Number(String(this.inputText.nativeElement.value).length);
  }

}
