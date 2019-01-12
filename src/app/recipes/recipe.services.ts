import { ShoppingListService } from './../shopping-list/shopping-list.services';
import { Recipe } from './recipe.model';
import { Output, EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../share/ingredients.model';
@Injectable()
export class RecipeService {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('a test recipe', 'this is test recipe', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Sichuanese_cuisine.jpg'
    , [
      new Ingredients('meet', 1),
      new Ingredients('french fries', 2)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('recipe 2', 'this is recipe test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg',
    [
      new Ingredients('meet', 1),
      new Ingredients('french fries', 2)
    ])
  ];

  constructor(private slServices: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addingIngredientToShoppingList(ingredients: Ingredients[]) {
    this.slServices.addIngredients(ingredients);
  }
}
