import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Indgredient } from "../shared/ingredient.model";
import { Subject, ignoreElements } from "rxjs";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
    recipeSelected= new EventEmitter<Recipe>();
    recipesChanged= new Subject<Recipe[]>();
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

      setRecipes(recipes: Recipe[])
      {
        this.recipes=recipes;

      }
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
   addRecipe(recipe: Recipe)
   {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number, newRecipe: Recipe)
    {
      this.recipes[index]=newRecipe;
      this.recipesChanged.next(this.recipes.slice());
   }
   deleteRecipe(id:number)
   {
    this.recipes.splice(id,1);
    this.recipesChanged.next(this.recipes.slice());
   }
}