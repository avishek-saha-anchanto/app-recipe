import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes :Recipe[] ;
  subcription:Subscription;
  constructor(private recipeService: RecipeService,private router:Router,
    private route:ActivatedRoute,
          ) {

  }
  ngOnInit(){
    this.subcription= this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[])=>
      {
        this.recipes=recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  // onRecipeSelected(recipe: Recipe)
  // {
  //   this.recipeWasSelected.emit(recipe);

  // }
}
