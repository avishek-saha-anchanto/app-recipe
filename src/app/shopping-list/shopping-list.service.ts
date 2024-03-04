import { Indgredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredients:Indgredient[]=[
        new Indgredient("apple",15),
        new Indgredient("potato",16)
      ];
    onAddItem(ingre:Indgredient)
    {
        this.ingredients.push(ingre);
    }

}