import { Component } from '@angular/core';
import { Indgredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients:Indgredient[]=[
    new Indgredient("apple",15),
    new Indgredient("potato",16)
  ];
}
