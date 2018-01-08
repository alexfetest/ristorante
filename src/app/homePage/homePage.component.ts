import { Component } from '@angular/core';

const restaurantMenuItems: {
    id: number,
    name: string,
    price: number,
    description?: string;
  }[] = [
  {
    id: 1,
    name: 'Spaghetti',
    price: 15,
    description: 'Served with mushrooms, ground beef, home made zesty tomato sauce'
  },
  {
    id: 2,
    name: 'Gnocchi',
    price: 18,
    description: 'Served with garlic grilled shrimp and asparagus'
  },
  {
    id: 3,
    name: 'Lasagna',
    price: 15,
    description: 'Made to order'
  },
  {
    id: 4,
    name: 'Pizza Margherita',
    price: 12,
    description: 'Thin crust, special home made pizza sauce, organic cheese'
  },
  {
    id: 5,
    name: 'Grilled Red Snapper',
    price: 20,
    description: 'Served on rice and bell peppers'
  }
]

@Component({
  selector: 'home-page',
  templateUrl: './homePage.html',
  styleUrls: ['./homePage.scss']
})
export class HomePageComponent {
  constructor() {}
  ngOnInit() {}

  restaurantMenuItems = restaurantMenuItems;
}
