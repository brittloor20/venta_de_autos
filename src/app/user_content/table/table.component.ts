import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  users: User[] = [];
  constructor(private service: UserService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(id: string) {
    this.service.deleteUser(id).subscribe(
      (data) => {
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  getUsers(){

    this.service.getUsers().subscribe((data) =>{
      this.users = data;
      console.log(this.users);
    });
  }
}
