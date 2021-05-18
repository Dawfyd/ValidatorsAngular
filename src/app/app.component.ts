import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {}
  title = "test";
  angForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.angForm = this.fb.group({
      name: ["", [Validators.required,
                  Validators.minLength(4),
                  Validators.maxLength(10)]],
    });

  }

}
