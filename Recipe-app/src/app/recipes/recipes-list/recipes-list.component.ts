import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


  constructor(private recipeService: RecipeService) {
  }

  recipes: Recipe[];

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }



}
