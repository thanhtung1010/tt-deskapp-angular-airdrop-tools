import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '@enums';
import { FirebaseService } from 'common-service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NzButtonModule]
})
export class HomeComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.firebaseService.logout().subscribe(resp => {
      if (resp) {
        this.router.navigate([ROUTE.AUTH]);
      }
    })
  }

}
