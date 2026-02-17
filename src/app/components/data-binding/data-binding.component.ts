import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string = "Angular 19 Full Course";
  myPlaceHolderName: string= "Enter the course name";
  isActive= false;
  showAlert(){
    alert("Welcome to Learn Agular 19");
  }

  showMessage(msg : string){
    alert (msg);
  }

  onStateChange(){
    alert("State Change")
  }
}
