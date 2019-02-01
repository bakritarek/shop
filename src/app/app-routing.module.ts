import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopComponent} from './components/shop/shop.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  { path : '', component : ShopComponent, runGuardsAndResolvers: 'always' },
  { path : 'login', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
