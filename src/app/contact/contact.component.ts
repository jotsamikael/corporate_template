import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      reason: ['support', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm(){
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } 
  }

}
