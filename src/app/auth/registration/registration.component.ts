import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterModel } from "src/app/Models/register.model";
import { RegisterService } from "src/app/Services/register.service";
import { ResponseModel } from "src/app/Models/login.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted: boolean = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  get registerControl() {
    return this.registrationForm.controls;
  }

  registerUser() {
    this.submitted = true;
    if (this.registrationForm.valid) {
      const registerInfo = new RegisterModel(
        this.registrationForm.value.name,
        this.registrationForm.value.email,
        this.registrationForm.value.password
      );

      this.registerService
        .register(registerInfo)
        .subscribe((response: ResponseModel) => {
          if (response.status === 200) {
            this.router.navigateByUrl("");
          }
        });
    }
  }
}
