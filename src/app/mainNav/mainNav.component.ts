import { Component } from '@angular/core';

const menuItems: {
  icon?: string;
  name: string;
  link: string;
  active?: boolean;
  dropdown?: { name: string, link: string }[]
  }[] = [
  {
    name: 'Home',
    icon: 'home',
    link: '#',
    active: true
  },
  {
    name: 'About',
    icon: 'info-sign',
    link: '#',
 },
 {
   name: 'Menu',
   link: '#',
   dropdown: [
     { name: 'Item 1', link: '#' },
     { name: 'Item 2', link: '#' },
     { name: 'Item 3', link: '#' }
   ]
 },
 {
   name: 'Contact',
   link: '#',
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
