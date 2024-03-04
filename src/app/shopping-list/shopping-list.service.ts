import { EventEmitter } from "@angular/core";
import { Indgredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Indgredient[]>();
    private ingredients:Indgredient[]=[
        new Indgredient("apple",15),
        new Indgredient("potato",16)
      ];
    getIngredients(){
        return this.ingredients.slice();
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

}