import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { MainNavComponent } from './mainNav/mainNav.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './homePage/homePage.component';
import { BasicTableComponent } from './basicTable/basicTable.component';

import { ReactiveFormsModule } from '@angular/forms';

import { SudokuComponent, SudokuService } from './sudoku/';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    HomePageComponent,
    BasicTableComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule
  ],
  providers: [SudokuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
