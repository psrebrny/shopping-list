import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test', 'https://goo.gl/7mnwNx',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://goo.gl/7mnwNx',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),
    new Recipe('Third Test Recipe', 'This is simply a test', 'https://goo.gl/7mnwNx',
      [
        new Ingredient('Fries', 15),
        new Ingredient('Hot dog', 1)
      ]),
    new Recipe('May the Fourth will be with you', 'This is simply a test', 'https://goo.gl/7mnwNx',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ])
  ];

  constructor(private shopingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shopingListService.addIngredients(ingredients);
  }

}
