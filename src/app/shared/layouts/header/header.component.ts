import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Changed Boolean to boolean (lowercase) for primitive type
  logged_in = false;
  // Changed String to string (lowercase) for primitive type
  language: string = 'English';
  // Changed String to string (lowercase) for primitive type
  user_role?: string;

  constructor(private translate: TranslateService, private router: Router) { }


  ngOnInit() {
    
    
  }

  ngDoCheck() {
    this.user_role = sessionStorage.getItem("role") || undefined;
    // console.log(this.user_role);
    
    const user_session_id = sessionStorage.getItem("user_session_id")
    if (user_session_id) {
      this.logged_in = true;
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    if (language == 'en') {
      this.language = "English";
    } else if (language == 'hn') {
      this.language = "हिंदी(Hindi)";
    }
  }

  logOut() {
    sessionStorage.removeItem("user_session_id");
    sessionStorage.removeItem("role");
    this.router.navigateByUrl('/sign-in');
    location.reload()
  }

}