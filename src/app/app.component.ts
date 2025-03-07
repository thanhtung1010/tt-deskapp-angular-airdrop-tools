import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SVG_DATA } from '@enums';
import { TranslateService } from '@ngx-translate/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { FirebaseService } from 'common-service';
import { forkJoin, Observable } from 'rxjs';
import { environment } from '~environments/environment';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'tt-deskapp-angular-airdrop-tools';

  constructor(
    private fbService: FirebaseService,
    private iconReg: SvgIconRegistryService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.fbService.init().subscribe(resp => {});

    this.translateService.addLangs(['vi']);
    this.translateService.setDefaultLang('vi');
    this.translateService.use('vi');

    const svgRegisReqs: Array<Observable<SVGElement | undefined>> = [];
    SVG_DATA.forEach(svg => {
      svgRegisReqs.push(this.iconReg.loadSvg(`${environment.assetsUrl}/assets/icons/${svg.path}`, svg.key) as Observable<SVGElement | undefined>);
    });

    forkJoin(svgRegisReqs).subscribe(resp => {})
  }
}
