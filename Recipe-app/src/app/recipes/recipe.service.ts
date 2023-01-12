import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {

  private _selectedItem = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe('TestRecipe', 'A test recipe',
      'https://www.acouplecooks.com/wp-content/uploads/2021/04/Baked-Quesadilla-in-Oven-003.jpg', [
        new Ingredient('potatoes', 2),
        new Ingredient('French fries', 20)
      ]),
    new Recipe('TestRecipe2', 'A test recipe',
      'https://www.acouplecooks.com/wp-content/uploads/2021/04/Baked-Quesadilla-in-Oven-003.jpg', [
        new Ingredient('  Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];


  constructor(private shoppingListService: ShoppingListService) {
  }

  get selectedItem(): EventEmitter<Recipe> {
    return this._selectedItem;
  }

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  addIngredientsToSoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
