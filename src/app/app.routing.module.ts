import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AuthGuard } from './auth.service';
import { ItemComponent } from './item/item.component';
import { ItemResolver } from './item-resolver.service';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'list',
    component: ListItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list/:id',
    component: ItemComponent,
    resolve: {
      item: ItemResolver
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutedComponents = [
  WelcomeComponent,
  ListItemComponent,
  ItemComponent,
  CartComponent,
  LoginComponent
];
