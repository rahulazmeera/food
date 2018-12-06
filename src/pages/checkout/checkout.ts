import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VegitemsProvider } from '../../providers/vegitems/vegitems';
import {VegitemsPage} from '../vegitems/vegitems';
//import { List } from 'ionic-angular';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartprovider:VegitemsProvider) {
  }

  public cartitems:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
   this.cartitems = this.cartprovider.getCartItems()

   console.log(this.cartitems);
  }



finalize(){
  this.cartprovider.shopcart=[];
  this.navCtrl.push(VegitemsPage);

  
  
}






  


}
