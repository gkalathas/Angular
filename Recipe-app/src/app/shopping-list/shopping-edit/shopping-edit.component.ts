import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {


  @Input() defaultColor: string = 'blue';
  @Input() highlightColor: string = 'red';
  @ViewChild('nameInput')nameInputRef:ElementRef;
  @ViewChild('amountInput')amountInputRef:ElementRef;

  @Output()ingredientAdded = new EventEmitter<Ingredient>();
  onAddItem() {
    const ingName =  this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newItem = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newItem);
  }

}
