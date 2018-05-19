import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { AuthService } from '../services/auth.service';
import { RouterLink, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

``
@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  constructor(public db: DatabaseService, public auth: AuthService, public router: Router, public cookieService: CookieService) { }

  ngOnInit() {
    this.db.loggedInUserUID = this.cookieService.get('User uid');
    this.db.loggedIn = this.cookieService.get('User login status');
    this.db.getLoggedInUser(); // in order to print logged in user info - on init get it
    console.log(this.db.loggedInUser)
  }

//on update info button click updates logged in users info according to the info that was inserted in the temporary update form
public updateInfo() {
  this.db.updateListing(this.db.loggedInUser.email);
  alert("Data updated!");
}


//alo
}
