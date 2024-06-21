import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder, private service: UserService) {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      name: [
        '',
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ], 
      password: [
        '',
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  onSubmit(){
    if (this.form.invalid) {
      console.log ('invalid form');
      return;
    }
    this.service.addUser(this.form.value).subscribe((data)=>{
      console.log(data);
    });
  }
  
}
