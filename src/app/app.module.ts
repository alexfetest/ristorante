import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { MainNavComponent } from './mainNav/mainNav.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './homePage/homePage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
