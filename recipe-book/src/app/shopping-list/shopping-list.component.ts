import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit() {}

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
  }

  onDelete(ingredient: Ingredient){
    this.ingredients.forEach(ing => {
      if(ing.name.toLowerCase() === ingredient.name.toLowerCase()){
        const index = this.ingredients.indexOf(ing);
        this.ingredients.splice(index,1);
      }
    })
  }
}
