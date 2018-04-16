import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class FirebaseUserModel {
  image: string;
  name: string;
  provider: string;

  constructor() {
    this.image = '';
    this.name = '';
    this.provider = '';
  }
}
