import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  testFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {

    this.testFormGroup = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  saveUserInformation() {
    console.log(this.testFormGroup.valid);
    console.log("form data : ", this.testFormGroup?.value);
  
  }
}
