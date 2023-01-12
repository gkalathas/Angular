import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {RecipeService} from "../recipes/recipe.service";

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Peaches', 15)
  ];


  constructor() {
  }

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   this.onIngredientAdded(ingredient);
    // }
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this._ingredients.slice());

  }




  // onAddItem(ingName: string, ingAmount: number) {
  //   const newItem = new Ingredient(ingName, ingAmount);
  //   this.ingredientAdded.emit(newItem);
  // }
}
