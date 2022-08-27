import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './core/store/reducers/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers } from '@core/store/metareducers';
import { NavbarNavigationComponent } from './layout/navbar/component/navbar-navigation/navbar-navigation.component';
import { ThemeTogglerComponent } from './layout/navbar/component/theme-toggler/theme-toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    NavbarComponent,
    NavbarNavigationComponent,
    ThemeTogglerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({books : booksReducer}, {metaReducers}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
