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

 
}]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
