import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  form: FormGroup;
  checkbox: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group ({
      username: [
        '',
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      phone: ['', Validators.minLength(3), Validators.maxLength(50)],
      name: [
        '',
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ], 
      password: [
        '',
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      checkbox: [false],
    });
  }
  onSubmit() {
    if(this.form.invalid){
      console.log ('invalid form');
      return;
    }
    console.log(this.form.value);
    const user = {
      username: this.form.value.username,
      phone: this.form.value.phone,
      name: this.form.value.name,
      password:  this.form.value.password,
      checkbox: this.form.value.checkbox,
    };
    
    this.userService.addUser(user).subscribe((data: any) => {
      console.log(data);
    });
  }
}
