import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'lc-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredt: Ingredient) {
    this.ingredients.push(ingredt);
  }

}
