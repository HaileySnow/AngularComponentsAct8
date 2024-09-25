import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisplayhelloworldComponent } from './displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './displayname/displayname.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { UserageComponent } from './userage/userage.component';
import { UsergreetingComponent } from './usergreeting/usergreeting.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TextlengthComponent } from './textlength/textlength.component';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from './wordreverser/wordreverser.component';
import { ShowdateComponent } from './showdate/showdate.component';
import { ShowusernameComponent } from './showusername/showusername.component';
import { MultiplicationtableComponent } from './multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from './simplelogin/simplelogin.component';
import { FahrenheittocelsiusComponent } from './fahrenheittocelsius/fahrenheittocelsius.component';
import { BookmarklistComponent } from './bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from './charactercounter/charactercounter.component';
import { PalindromecheckerComponent } from './palindromechecker/palindromechecker.component';
import { TemperatureconverterComponent } from './temperatureconverter/temperatureconverter.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from './factorialcalculator/factorialcalculator.component';
import { TodomanagerComponent } from './todomanager/todomanager.component';
import { GuessnumbergameComponent } from './guessnumbergame/guessnumbergame.component';
import { WordcounterComponent } from './wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from './randomnumbergenerator/randomnumbergenerator.component';
import { MultiplicationcheckerComponent } from './multiplicationchecker/multiplicationchecker.component';
import { UppercaseconverterComponent } from './uppercaseconverter/uppercaseconverter.component';
import { WordshufflerComponent } from './wordshuffler/wordshuffler.component';
import { BmisolverComponent } from './bmisolver/bmisolver.component';
import { UsernamevalidatorComponent } from './usernamevalidator/usernamevalidator.component';
import { InterestcalculatorComponent } from './interestcalculator/interestcalculator.component';
import { CompoundinterestcalculatorComponent } from './compoundinterestcalculator/compoundinterestcalculator.component';
import { FibonaccigeneratorComponent } from './fibonaccigenerator/fibonaccigenerator.component';
import { OddsumcalculatorComponent } from './oddsumcalculator/oddsumcalculator.component';
import { CurrencyformatterComponent } from './currencyformatter/currencyformatter.component';
import { RandomquotedisplayComponent } from './randomquotedisplay/randomquotedisplay.component';
import { UppercasegreetingComponent } from './uppercasegreeting/uppercasegreeting.component';
import { DivisiblecheckerComponent } from './divisiblechecker/divisiblechecker.component';
import { MonthnamefinderComponent } from './monthnamefinder/monthnamefinder.component';
import { NameinitialsComponent } from './nameinitials/nameinitials.component';
import { LettertonumbersComponent } from './lettertonumbers/lettertonumbers.component';
import { WordCombineConverterComponent } from './wordcombineconverter/wordcombineconverter.component';




export const routes: Routes = [
{
    title: 'Component #1: Display Hello World',
    component: DisplayhelloworldComponent,
    path: 'hello-world',

},
{
    title: 'Component #2: Show Hello Button',
    component: ShowhellobuttonComponent,
    path: 'hello-button',
},
{
    title: "Component #3: Display User's name",
    component: DisplaynameComponent,
    path: 'display-name',
},
{
    title: 'Component #4: Counter',
    component: CounterComponent,
    path: 'counter',
},
{
    title: 'Component #5: Simple Form',
    component: SimpleformComponent,
    path: 'simple-form',
},
{
    title: 'Component #6: User Age',
    component: UserageComponent,
    path: 'user-age',
},
{
    title: 'Component #7: User Greeting',
    component: UsergreetingComponent,
    path: 'user-greeting',
},
{
    title: 'Component #8: Calculator',
    component: CalculatorComponent,
    path: 'calculator',
},
{
    title: 'Component #9: Text Length',
    component: TextlengthComponent,
    path: 'textlength',
},
{
    title: 'Component #10: Currency Converter',
    component: CurrencyconverterComponent,
    path: 'currency-converter',
},
{
    title: 'Component #11: Even or Odd',
    component: EvenoddcheckerComponent,
    path: 'evenodd',
},
{
    title: 'Component #12: Reverse Word',
    component: WordreverserComponent,
    path: 'word-reverser',
},
{
    title: 'Component #13: Show Date',
    component: ShowdateComponent,
    path: 'date-now',
},
{
    title: 'Component #14: Show Username',
    component: ShowusernameComponent,
    path: 'show-username',
},
{
    title: 'Component #15: Multiplication Table',
    component: MultiplicationtableComponent,
    path: 'multiplication-table',
},
{
    title: 'Component #16: Simple Login',
    component: SimpleloginComponent,
    path: 'simple-login',
},
{
    title: 'Component #17: Fahrenheit to Celcius',
    component: FahrenheittocelsiusComponent,
    path: 'degrees',
},
{
    title: 'Component #18: Bookmarks List',
    component: BookmarklistComponent,
    path: 'bookmark-list',
},
{
    title: 'Component #19: Character Counter',
    component: CharactercounterComponent,
    path: 'character-counter',
},
{
    title: 'Component #20: Palindrome',
    component: PalindromecheckerComponent,
    path: 'palindrome',
},
{
    title: 'Component #21: Temperature Converter',
    component: TemperatureconverterComponent,
    path: 'temp-converter',
},
{
    title: 'Component #22: Shopping List',
    component: ShoppinglistComponent,
    path: 'shopping-list',
},
{
    title: 'Component #23: Factorial',
    component: FactorialcalculatorComponent,
    path: 'factorial',
},
{
    title: 'Component #24: Todo Manager',
    component: TodomanagerComponent,
    path: 'todo',
},
{
    title: 'Component #25: Guess Number Game',
    component: GuessnumbergameComponent,
    path: 'guess-number-game',
},
{
    title: 'Component #26: Words counter',
    component: WordcounterComponent,
    path: 'words-counter',
},
{
    title: 'Component #27: Random Number Generator',
    component: RandomnumbergeneratorComponent,
    path: 'random-num',
},
{
    title: 'Component #28: Multiplication Checker',
    component: MultiplicationcheckerComponent,
    path: 'multiplication-check',
},
{
    title: 'Component #29: Upper Case Converter',
    component: UppercaseconverterComponent,
    path: 'uppercase-converter',
},
{
    title: 'Component #30: Word Shuffler',
    component: WordshufflerComponent,
    path: 'shuffler',
},
{
    title: 'Component #31: BMI Solver',
    component: BmisolverComponent,
    path: 'bmi',
},
{
    title: 'Component #32: Username Validator',
    component: UsernamevalidatorComponent,
    path: 'username-validator',
},
{
    title: 'Component #33: Interest Calculator',
    component: InterestcalculatorComponent,
    path: 'interest-calculator',
},
{
    title: 'Component #34: Compound Interest Calculator',
    component: CompoundinterestcalculatorComponent,
    path: 'compound-interest-calculator',
},
{
    title: 'Component #35: Fibonacci Sequence',
    component: FibonaccigeneratorComponent,
    path: 'fib',
},
{
    title: 'Component #36: Odd Sum Calculator',
    component: OddsumcalculatorComponent,
    path: 'odd-sum',
},
{
    title: 'Component #37: Currency Formatter',
    component: CurrencyformatterComponent,
    path: 'currency-formatter',
},
{
    title: 'Component #38: Random Qoute',
    component: RandomquotedisplayComponent,
    path: 'randomquotes',
},
{
    title: 'Component #39: Upper Case Name',
    component: UppercasegreetingComponent,
    path: 'uppercase-name',
},
{
    title: 'Component #40: Divisible By',
    component: DivisiblecheckerComponent,
    path: 'divisible-by',
},
{
    title: 'Component #41: Month Names',
    component: MonthnamefinderComponent,
    path: 'month-name',
},
{
    title: 'Component #42: Name Initials',
    component: NameinitialsComponent,
    path: 'get-initials', 
},
{
    title: 'Component #43: Letter to Numbers',
    component: LettertonumbersComponent,
    path: 'letter-to-number',
},
{
    title: 'Component #44: Word Combine Converter',
    component: WordCombineConverterComponent,
    path: 'word-combine-converter',
}]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
