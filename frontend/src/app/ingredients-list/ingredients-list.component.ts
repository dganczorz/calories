import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { IngredientsService } from '../ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientsService) { }

  ngOnInit() {
    // fetch all ingredients
    this.fetchIngredients();
  }

  fetchIngredients() {
    let promise = this.ingredientService.getAll().subscribe(
      (result: Ingredient[]) => { this.ingredients = result }
    );
    console.log(promise);
  }

}
