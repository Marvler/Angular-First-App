import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @Output() deletedIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    // this.newIngredient.emit({
    //   name: nameInput.value,
    //   amount: amountInput.valueAsNumber,
    // });
    this.newIngredient.emit({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value,
    });
  }

  onDelete(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    // this.deletedIngredient.emit({
    //   name: nameInput.value,
    //   amount: amountInput.valueAsNumber,
    // });
    this.deletedIngredient.emit({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value,
    });
  }

  onClear() {
    const nameField = document.getElementById('name');
    const amountField = document.getElementById('amount');
    (<HTMLInputElement>nameField).value = '';
    (<HTMLInputElement>amountField).value = '';
  }
}
