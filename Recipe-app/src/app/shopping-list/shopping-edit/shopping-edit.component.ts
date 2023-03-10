import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {


  constructor(private shoppingListService: ShoppingListService) {
  }
  @ViewChild('nameInput')nameInputRef:ElementRef;
  @ViewChild('amountInput')amountInputRef:ElementRef;
  onAddItem() {
    const ingName =  this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.onIngredientAdded(newIngredient);
  }

}
