import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CheckoutPage } from '../pages/checkout/checkout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoodtypePage } from '../pages/foodtype/foodtype';
import { VegitemsPage } from '../pages/vegitems/vegitems';
import { VegitemsProvider } from '../providers/vegitems/vegitems';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FoodtypePage,
    VegitemsPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FoodtypePage,
    VegitemsPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VegitemsProvider
  ]
})
export class AppModule {}
