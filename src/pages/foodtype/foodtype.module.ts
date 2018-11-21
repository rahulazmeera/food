import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodtypePage } from './foodtype';

@NgModule({
  declarations: [
    FoodtypePage,
  ],
  imports: [
    IonicPageModule.forChild(FoodtypePage),
  ],
})
export class FoodtypePageModule {}
