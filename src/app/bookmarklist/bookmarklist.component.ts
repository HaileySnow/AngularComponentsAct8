import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  standalone: true,
  imports: [],
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
 
  @ViewChild('linkInput') linkInput!: ElementRef;
    linksArray: string[] = [];
    addLink(): void {
        this.linksArray.push(
            `https://www.${this.linkInput.nativeElement.value}`
        );
        this.linkInput.nativeElement.value = '';
    }

}
