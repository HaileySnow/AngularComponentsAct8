import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkmyzodiac',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkmyzodiac.component.html',
  styleUrl: './checkmyzodiac.component.css'
})
export class CheckmyzodiacComponent {

  birthday: string = '';

  zodiacSign: string | null = null;

 

  onBirthdayInput(event: Event): void {

    const inputElement = event.target as HTMLInputElement;

    this.birthday = inputElement.value;

  }

 

  getZodiacSign(): void {

    const date = new Date(this.birthday);

    const month = date.getUTCMonth() + 1; 

    const day = date.getUTCDate();

 

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {

      this.zodiacSign = 'Aquarius';

    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {

      this.zodiacSign = 'Pisces';

    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {

      this.zodiacSign = 'Aries';

    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {

      this.zodiacSign = 'Taurus';

    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {

      this.zodiacSign = 'Gemini';

    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {

      this.zodiacSign = 'Cancer';

    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {

      this.zodiacSign = 'Leo';

    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {

      this.zodiacSign = 'Virgo';

    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {

      this.zodiacSign = 'Libra';

    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {

      this.zodiacSign = 'Scorpio';

    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {

      this.zodiacSign = 'Sagittarius';

    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {

      this.zodiacSign = 'Capricorn';

    } else {

      this.zodiacSign = 'Unknown';

    }

  }

}
