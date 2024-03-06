import { Component, OnInit } from '@angular/core';
import { Indgredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  //providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients:Indgredient[];
  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingre: Indgredient[])=>{
        this.ingredients=ingre;
         console.log(2);
      }
    );
   
  }
  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }
  // onIngredientAdded(ing:Indgredient)
  // {
  //   this.ingredients.push(ing);
  // }
}
