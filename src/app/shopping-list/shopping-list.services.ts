import { Ingredients } from './../share/ingredients.model';
import { Output, EventEmitter } from '@angular/core';
export class ShoppingListService {
  @Output() ingredientChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[]  = [
    new Ingredients('apples', 5),
    new Ingredients('tomatoes', 5),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  AddIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    // for (let ingredient of ingredients) {
    //   this.AddIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
