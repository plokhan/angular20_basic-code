import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  userForm: any ={
    fName:'',
    lName:'',
    userName:'',
    city:'',
    state:'',
    zipcode:'',
    isActive:false
  }

  onSaveUser(){
    const formValue = this.userForm;

    console.log("formValue", formValue);

  }
}
