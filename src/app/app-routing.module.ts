import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopComponent} from './components/shop/shop.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {ItemComponent} from './components/shop/item/item.component';

const routes: Routes = [
  { path : '', component : ShopComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always' },
  { path : 'item-detail/:id', component : ItemComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always' },
  { path : 'login', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
