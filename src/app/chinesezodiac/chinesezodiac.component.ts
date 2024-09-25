import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chinesezodiac',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chinesezodiac.component.html',
  styleUrl: './chinesezodiac.component.css'
})
export class ChinesezodiacComponent {

  zodiacSign: string = '';

  chineseZodiac: { [key: number]: string } = {
    2000: 'Dragon', 2001: 'Snake', 2002: 'Horse', 2003: 'Goat',
    2004: 'Monkey', 2005: 'Rooster', 2006: 'Dog', 2007: 'Pig',
    2008: 'Rat', 2009: 'Ox', 2010: 'Tiger', 2011: 'Rabbit',
    2012: 'Dragon', 2013: 'Snake', 2014: 'Horse', 2015: 'Goat',
    2016: 'Monkey', 2017: 'Rooster', 2018: 'Dog', 2019: 'Pig',
    2020: 'Rat', 2021: 'Ox', 2022: 'Tiger', 2023: 'Rabbit',
    2024: 'Dragon'
  };

  
  getZodiacSign(year: string): void {
    const birthYear = Number(year);
    if (this.chineseZodiac[birthYear]) {
      this.zodiacSign = this.chineseZodiac[birthYear];
    } else {
      this.zodiacSign = 'Invalid year, please enter between 2000 and 2024';
    }
  }

}
