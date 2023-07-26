import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') name: ElementRef;
  // @ViewChild('amountInput') amount: ElementRef;
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

  onSubmit(form: NgForm) {
    // console.log("hello")
    // this.slService.addIngredient({
    //   name:this.name.nativeElement.value,
    //   amount: this.amount.nativeElement.value
    // })
    // const ingName = this.name.nativeElement.value;
    // const ingAmount = this.amount.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.onClear();
    this.slService.deleteIngredient(this.editedItemIndex);
    // this.deletedIngredient.emit({
    //   name: nameInput.value,
    //   amount: amountInput.valueAsNumber,
    // });
  }

  onClear() {
    // const nameField = document.getElementById('name');
    // const amountField = document.getElementById('amount');
    // (<HTMLInputElement>nameField).value = '';
    // (<HTMLInputElement>amountField).value = '';
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
