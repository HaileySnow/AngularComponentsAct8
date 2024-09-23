import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  standalone: true,
  imports: [],
  templateUrl: './showhellobutton.component.html',
  
})
export class ShowhellobuttonComponent {

  show = '';
  showHello(): void {
      this.show = 'Hello World';
  }
}

