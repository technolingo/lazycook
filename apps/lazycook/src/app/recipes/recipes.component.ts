import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'lc-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  currentRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  updateRecipeInfo(rcp: Recipe) {
    this.currentRecipe = rcp;
  }
}
