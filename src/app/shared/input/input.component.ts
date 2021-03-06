import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label?: string;
  @Input() control: any;
  @Input() inputType?: string;

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, errors, touched } = this.control;

    return dirty && touched && errors;
  }
}
