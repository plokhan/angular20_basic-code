import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  http = inject(HttpClient)
  usersList : any [] = [];

  constructor(){
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>
    this.usersList= res
    )
  }
}
