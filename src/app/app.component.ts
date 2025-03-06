import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDocumentModel, FirebaseCollectionService, FirebaseService } from 'common-service';
import { Expose } from 'class-transformer';

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
  name: string = '';
  code: string = '';

  constructor(
    private fbService: FirebaseService,
    private fbCollectionService: FirebaseCollectionService<ICommon>,
  ) {}

  ngOnInit(): void {
    this.fbService.init().subscribe(resp => {
      console.warn('init firebase success')
    });
    this.fbCollectionService.collection = 'TEST';
  }

  submit() {
    const data = {
      name: this.name,
      code: this.code,
    }
    this.fbCollectionService.addNewDocument(CommonModel.fromJson(data)).subscribe(resp => {
      console.log(resp);

    })
  }
}

export class CommonModel extends CreateDocumentModel {
  @Expose()
  name!: string;

  @Expose()
  code!: string;
}

export interface ICommon {
  name: string;
  code: string;
}
