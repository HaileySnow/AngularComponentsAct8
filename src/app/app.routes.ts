import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisplayhelloworldComponent } from './displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './displayname/displayname.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { UserageComponent } from './userage/userage.component';
import { UsergreetingComponent } from './usergreeting/usergreeting.component';




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

 
}]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
