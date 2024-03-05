import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Indgredient } from "../shared/ingredient.model";
import { ignoreElements } from "rxjs";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
    recipeSelected= new EventEmitter<Recipe>();
    private recipes :Recipe[] = [
        new Recipe('A test recipe1', 
        'this is a very tastful recipe',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Indgredient('meat',12),new Indgredient('French Fries',8)]),
        new Recipe('A test recipe2', 
        'this is a very tastful recipe',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Indgredient('meat',12), new Indgredient('Buns',10)]),
    
      ];

      constructor(private slList: ShoppingListService){}
    getRecipes()
   {
    return this.recipes.slice();

   }
   getRecipe(index:number)
   {
    return this.recipes[index];
   }
   addIngredientsToShoppingList(inggredients: Indgredient[])
   {
    this.slList.addIngredients(inggredients);
   }
}