import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSignupService } from '../../shared/services/login-signup.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  // Added explicit type for form value object instead of using 'any'
  signInFormValue: {userEmail?: string, userPassword?: string} = {};
  // Added explicit type for user_data
  user_data: any[] | undefined;

  constructor(private router: Router, private logsign_service: LoginSignupService) { }

  ngOnInit(): void {
    // Added return type to ngOnInit as per Angular 12 best practices
  }

  onSubmitSignIn(): void {
    // Added return type to method as per Angular 12 best practices
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signInFormValue));
    this.logsign_service.adminLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword).subscribe(data => {
      this.user_data = data;
      if (this.user_data.length == 1) {
        // alert("Validate")
        sessionStorage.setItem("user_session_id", this.user_data[0].id);
        sessionStorage.setItem("role", this.user_data[0].role);
        this.router.navigateByUrl('/admin-dashboard');
      } else {
        alert("Invalid")
      }
      console.log(this.user_data);

    }, error => {
      console.log("My error", error);
    })
  }
}