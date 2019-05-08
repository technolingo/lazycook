import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'lc-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Kebab pizza.', 'http://bit.do/eRzsH'),
    new Recipe('Jiaozi', 'Chinese dumplings', 'http://bit.do/eRR7N'),
  ];
  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeClicked(rcp: Recipe) {
    this.recipeClicked.emit(rcp);
  }

}
