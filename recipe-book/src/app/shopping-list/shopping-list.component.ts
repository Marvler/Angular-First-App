import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] = [];
  private ingChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.ingChangeSub.unsubscribe();
  }

  // onDelete(ingredient: Ingredient){
  //   this.ingredients.forEach(ing => {
  //     if(ing.name.toLowerCase() === ingredient.name.toLowerCase()){
  //       const index = this.ingredients.indexOf(ing);
  //       this.ingredients.splice(index,1);
  //     }
  //   })
  // }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
