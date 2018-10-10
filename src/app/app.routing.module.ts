import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.service';
import { ItemResolver } from './item-resolver.service';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ItemsModule } from './items/items.module';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'list',
    loadChildren: './items/items.module#ItemsModule',
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
  CartComponent,
  LoginComponent
];
