import { Ingredients } from 'src/app/share/ingredients.model';
export class Recipe {
  public name: string;
  public description: string;
  public img_path: string;
  public ingredient: Ingredients[];

  constructor(name, description, img_path, ingredient: Ingredients[]) {
    this.name = name;
    this.description = description;
    this.img_path = img_path;
    this.ingredient = ingredient;
  }
}
