import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {

  //string number date boolean

  firstName: string = 'Prajwal';
  lastName: string = 'Lokahnde';
  courseName: string;
  rollNo: number = 123;
  isActive: boolean = true;


  constructor(){
    this.courseName = 'Angular 19 Full Course';
    this.rollNo = 234;
  }

}
