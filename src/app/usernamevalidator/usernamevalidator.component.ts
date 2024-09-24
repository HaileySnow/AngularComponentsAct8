import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  standalone: true,
  imports: [],
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
 
  @ViewChild('username') username!: ElementRef;
	Result = '';

	validate(): void {
		const usernameValue = this.username.nativeElement.value;
		const regex = /^[\w\p{P}\p{S}]{4}$/u;
		this.Result = regex.test(usernameValue) ? 'allowed' : 'denied';
	}

}
