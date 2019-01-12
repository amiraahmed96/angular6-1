import { RecipeService } from './../recipe.services';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  public show = false;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  showClass() {
    this.show = !this.show;
    console.log(this.show);
  }
  onAddToShoppingList() {
    this.recipeService.addingIngredientToShoppingList(this.recipe.ingredient);
  }

}
