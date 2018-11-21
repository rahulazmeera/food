import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VegitemsPage } from './vegitems';

@NgModule({
  declarations: [
    VegitemsPage,
  ],
  imports: [
    IonicPageModule.forChild(VegitemsPage),
  ],
})
export class VegitemsPageModule {}
