import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private slService: ShoppingListService) {
  }

  addIngredient() {
    console.log("hello")
    this.slService.addIngredient({
      name:this.name.nativeElement.value,
      amount: this.amount.nativeElement.value
    })
  }

  onDelete(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    // this.deletedIngredient.emit({
    //   name: nameInput.value,
    //   amount: amountInput.valueAsNumber,
    // });
  }

  onClear() {
    const nameField = document.getElementById('name');
    const amountField = document.getElementById('amount');
    (<HTMLInputElement>nameField).value = '';
    (<HTMLInputElement>amountField).value = '';
  }
}
