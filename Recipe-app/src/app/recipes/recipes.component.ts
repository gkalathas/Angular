import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  loadedRecipe: Recipe;


  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.selectedItem.subscribe(
      (recipe: Recipe) => {
        this.loadedRecipe = recipe;
      }
    );
  }




}
