import { NgIf, NgForOf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule, NgForOf, NgClass],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  isVisible: Boolean | undefined;
  isvisibleDiv2 = false;
  selectedCast: string = ' ';
  studDivClass = ' '
  num1 = 0;
  num2 = 0;
  productClass = ''

  isOrderActive: boolean = false;

  cityList = ['Pune', 'Mumbai', 'Nagpur', 'Yavatmal', 'Ner'];

  studentList: any = [
    { name: 'AAA', city: 'Pune', isActive: true, Rank: 'A' },
    { name: 'BBB', city: 'Mumbai', isActive: true, Rank: 'B' },
    { name: 'CCC', city: 'Pune', isActive: false,  },
    { name: 'DDD', city: 'Nagpur', isActive: false, Rank: 'C' },
    { name: 'EEE', city: 'Yavatmal', isActive: true, Rank: 'B' },
    { name: 'FFF', city: 'Ner', isActive: true, Rank: 'A' },
  ];

  showDiv() {
    this.isVisible = true;
  }

  HideDiv() {
    this.isVisible = false;
  }

  showHideDiv2(isDisplay: boolean) {
    this.isvisibleDiv2 = isDisplay;
  }

  addProductClass(colorName: string){
    if(colorName == "green"){
      this.productClass = 'bg-success'
    }else{
      this.productClass = 'bg-danger'
    }
  }
}
