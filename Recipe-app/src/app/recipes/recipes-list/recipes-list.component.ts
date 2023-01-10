import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  @Output()selectedRecipeForTheParent =  new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('TestRecipe', 'A test recipe',
      'https://www.acouplecooks.com/wp-content/uploads/2021/04/Baked-Quesadilla-in-Oven-003.jpg'),
    new Recipe('TestRecipe2', 'A test recipe',
      'https://www.acouplecooks.com/wp-content/uploads/2021/04/Baked-Quesadilla-in-Oven-003.jpg')
  ];

  onSelectAgain(recipe: Recipe) {
    this.selectedRecipeForTheParent.emit(recipe);
  }




}
