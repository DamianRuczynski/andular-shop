import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('The test recipe', 'This is a simply test',
      'https://cdn.pixabay.com/photo/2020/06/15/18/21/croissants-5302909_960_720.jpg',),
    new Recipe('Another test recipe', 'This is a simply test',
      'https://cdn.pixabay.com/photo/2020/06/15/18/21/croissants-5302909_960_720.jpg',),
    new Recipe('Third test recipe', 'This is a simply test',
      'https://cdn.pixabay.com/photo/2020/06/15/18/21/croissants-5302909_960_720.jpg',)
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
