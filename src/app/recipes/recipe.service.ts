import {EventEmitter, Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Crossiant', 'Hungry? Eat that!',
      'https://cdn.pixabay.com/photo/2020/06/15/18/21/croissants-5302909_960_720.jpg',[
        new Ingredient('Puff Pastry ', 1),
        new Ingredient('Buuter', 1),
      ],
      ),
    new Recipe('Crossiant with milk', 'Tasty',
      'https://cdn.pixabay.com/photo/2020/06/15/18/21/croissants-5302909_960_720.jpg',[
        new Ingredient('Puff Pastry ', 1),
        new Ingredient('Buuter', 1),
        new Ingredient('Milk', 1),
      ],
      ),
    new Recipe('Third test recipe', 'This is a simply test',
      'https://cdn.pixabay.com/photo/2020/06/15/18/21/croissants-5302909_960_720.jpg',[],)
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
