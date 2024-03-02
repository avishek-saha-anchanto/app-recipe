import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes :Recipe[] = [
    new Recipe('A test recipe', 'this is a very tastful recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A test recipe', 'this is a very tastful recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),

  ];

}
