import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs";

@Injectable()
export class RecipesService {
  public recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Simple test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
      [new Ingredient('Meat', 1), new Ingredient('Cheese', 4)]
    ),
    new Recipe(
      'Second Recipe',
      'Simplest test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
      [new Ingredient('Bun', 1), new Ingredient('Salad', 4)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  constructor(private slService: ShoppingListService) {}
}
