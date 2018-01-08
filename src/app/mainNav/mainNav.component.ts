import { Component } from '@angular/core';

const menuItems: {
  icon?: string;
  name: string;
  active?: boolean;
  }[] = [
  {
    name: 'Home',
    icon: 'home',
    active: true
  },
  {
    name: 'About',
    icon: 'info-sign'
 },
 {
   name: 'Menu'
 },
 {
   name: 'Contact'
 }
];

@Component({
  selector: 'main-nav',
  templateUrl: './mainNav.html',
  styleUrls: ['./mainNav.scss']
})
export class MainNavComponent {
  constructor() {}
  ngOnInit() {}

  menuItems = menuItems;
}
