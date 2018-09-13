import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './item/item.component';
import { FilterAvailablePipe } from './filter-available.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CartComponent } from './cart/cart.component';
import { ItemResolver } from './item-resolver.service';
import { ItemsService } from './services/items.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.service';
import { ModalModule } from 'ngx-bootstrap/modal';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    LanguageSelectorComponent,
    ListItemComponent,
    ItemComponent,
    FilterAvailablePipe,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
