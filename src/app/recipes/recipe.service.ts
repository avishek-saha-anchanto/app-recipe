import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected= new EventEmitter<Recipe>();
    private recipes :Recipe[] = [
        new Recipe('A test recipe1', 'this is a very tastful recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A test recipe2', 'this is a very tastful recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    
      ];
    getRecipes()
   {
    return this.recipes.slice();

   }
}