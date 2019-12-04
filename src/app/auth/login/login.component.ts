import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AuthService } from "src/app/Services/auth.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ILoginModel, LoginModel, Data } from "../../Models/login.model";
import { SnackbarService } from "src/app/Services/snackbar.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  hide = true;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackBarService: SnackbarService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  get loginControls() {
    return this.loginForm.controls;
  }

  loginUser() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const loginInfo = new LoginModel(
        this.loginForm.value.username,
        this.loginForm.value.password
      );
      this.authService.login(loginInfo).subscribe((response: Data) => {
        this.snackBarService.openSnackBar("Login successfull..!!");
        this.loginForm.reset();
        this.submitted = false;
      });
    }
  }
}
