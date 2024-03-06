import { EventEmitter } from "@angular/core";
import { Indgredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Indgredient[]>();
    startedEditing = new Subject<number>();
    private ingredients:Indgredient[]=[
        new Indgredient("apple",15),
        new Indgredient("potato",16)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index:number)
    {
        return this.ingredients[index];
    }
    onAddItem(ingre:Indgredient)
    {
        this.ingredients.push(ingre);
        console.log("Service add");
        console.log(this.ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients:Indgredient[])
    {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }    
    updateIngredient(index:number, newIngredient: Indgredient)
    {
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    deleteIngredient(index:number)
    {
        this.ingredients.splice(index,1);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}