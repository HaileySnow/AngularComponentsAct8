import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-displayname',
  standalone: true,
  imports: [],
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {
  
  @ViewChild('nameField') nameField!: ElementRef;
  Name = '';
  displayName(): void {
      this.Name = this.nameField.nativeElement.value;
  }
}
