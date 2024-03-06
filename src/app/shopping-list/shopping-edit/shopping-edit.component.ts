import { Component, OnDestroy, OnInit, ViewChild,  } from '@angular/core';
import { Indgredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
  providers: [ShoppingListService]
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f',{static:false}) slForm: NgForm; 
  subscription:Subscription;
  editMode=false;
  editItemIndex:number;
  editedItem:Indgredient;
  // @Output() ingredientAdded = new EventEmitter<Indgredient>();

constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(): void {
   
    this.subscription=this.shoppingListService.startedEditing.subscribe(
      (index)=>{
        this.editMode=true;
        this.editItemIndex=index;
        this.editedItem=this.shoppingListService.getIngredient(this.editItemIndex);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit(form: NgForm)
  {
    const value=form.value;
    const newIngredient = new Indgredient(value.name,value.amount);
    if(this.editMode)
    {
      this.shoppingListService.updateIngredient(this.editItemIndex,newIngredient)
    }else
    {
      this.shoppingListService.onAddItem(newIngredient);
    }
    this.editMode=false;
    form.reset();
    //this.ingredientAdded.emit(newIngredient);
  }
  onDelete()
  {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear(); 
  }
  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }
}
