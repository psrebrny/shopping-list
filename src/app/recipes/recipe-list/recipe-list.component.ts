import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://goo.gl/7mnwNx'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://goo.gl/7mnwNx'),
    new Recipe('Third Test Recipe', 'This is simply a test', 'https://goo.gl/7mnwNx'),
    new Recipe('May the Fourth will be with you', 'This is simply a test', 'https://goo.gl/7mnwNx')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
