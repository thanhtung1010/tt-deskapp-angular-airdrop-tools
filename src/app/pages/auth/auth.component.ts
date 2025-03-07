import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTE } from '@enums';
import { TranslateModule } from '@ngx-translate/core';
import { AssetsLink, FirebaseService } from 'common-service';

@Component({
  selector: 'tt-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    AssetsLink,
    CommonModule,
  ],
})
export class AuthComponent implements OnInit {
  //#region variable
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  isSignUp: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    // this.initLoginForm();
    // this.initSignupForm();
    // if (!this.firebaseService.auth) this.firebaseService.initAuth();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  initSignupForm() {
    this.signupForm = this.fb.group({
      mail: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [this.confirmPasswordValidator]],
    });
  }

  confirmPasswordValidator = (control: AbstractControl): ValidationErrors => {
    const password = this.loginForm.value['password'];

    if (!control.value) return {required: true};

    if (control.value !== password) return {notMatchPassword: true};

    return {};
  }

  onClickGoToSignUp() {
    this.isSignUp = true;
  }

  onClickBackToLogin() {
    this.isSignUp = false;
  }

  //region v2
  loginWithGoogle() {
    this.firebaseService.googleLogin().subscribe({
      next: user => {
        this.router.navigate([ROUTE.AUTH]);
      },
      error: error => {
        console.error(error);
      }
    });
  }

  loginWithFacebook() {}
  //end region
}
