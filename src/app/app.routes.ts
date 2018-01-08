import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './homePage/homePage.component'

export const routes: Routes = [
  {
    path: '**',
    component: HomePageComponent
  },
];

export const APP_ROUTING = RouterModule.forRoot(routes);
