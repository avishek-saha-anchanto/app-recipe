import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Indgredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
  providers: [ShoppingListService]
})
export class ShoppingEditComponent {
  @ViewChild('nameInput',{static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Indgredient>();

  
  onAddItem()
  {

    const newIngredient = new Indgredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
}
