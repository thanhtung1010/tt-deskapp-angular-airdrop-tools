import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppConfigService, FirebaseService } from 'common-service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
  ],
})
export class AppComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    private firebaseService: FirebaseService,
    private appconfig: AppConfigService,
  ) {}

  ngOnInit(): void {
    this.translateService.addLangs(['vi']);
    this.translateService.setDefaultLang('vi');
    this.translateService.use('vi');

    this.firebaseService.init().subscribe(resp => {});
    this.appconfig.init();
  }
}
