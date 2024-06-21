import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  user: any = {};
  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userService.getUserById(params['id']).subscribe((data) => {
        this.user = data;
      });
    });
  }
}
