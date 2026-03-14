import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-api-call',
  imports: [],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css'
})
export class ApiCallComponent {

  http = inject(HttpClient);
  userList: any[] = [];
  compliantuser: any[] = [];

  getAllUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res : any )=>{
    this.userList = res;
    console.log(" this.userList",  this.userList);

  })
  }

  getComplaintUsers(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((res: any) =>{
      this.compliantuser = res.data;
      console.log("this.compliantuser", this.compliantuser);


    })
  }

}
