import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  id: string = '';
  user: any = {};
  form: FormGroup = new FormGroup ({});
  constructor (
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private service: UserService,
      private router: Router
    ){
      this.form = this.fb.group({
        username: ``,
        name: ``,
        password: ``,
      });
    }
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params ['id'];
      this.service.getUserById(this.id).subscribe((data)=>{
        this.user = data; 
        this.form = this.fb.group({
          username: [
            `${this.user.username}`,
            [
              Validators.required, 
              Validators.minLength(3),
              Validators.maxLength(20),
            ],
          ],
          name: [
            `${this.user.name}`,
            [
              Validators.required, 
              Validators.minLength(3),
              Validators.maxLength(20),
            ],
          ],
          password: [
            `${this.user.password}`,
            [
              Validators.required, 
              Validators.minLength(3),
              Validators.maxLength(20),
            ],
          ],
        })
      })
    })
  }

  onSubmit(){
    if (this.form.invalid){
      console.log('invalid form');
      return;
    }
    this.service.updateUser(this.user.id, this.form.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/']);
    });
  }
}