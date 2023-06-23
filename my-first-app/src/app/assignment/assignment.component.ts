import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent {
  public password: string = 'tuna';
  public displayedPassword: string = 'tuna';
  public hidden: boolean = false;
  public clickNumber: number = 0;
  public clickArray = [];

  togglePassword() {
    !this.hidden
      ? (this.displayedPassword = '****')
      : (this.displayedPassword = this.password);
    this.hidden = !this.hidden;
    this.clickNumber++;
    this.clickArray.push(new Date());
  }

  // getColor() {
  //   if (this.clickNumber > 5) {
  //     return 'white';
  //   }
  // }
}
