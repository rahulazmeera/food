import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VegitemsPage} from '../vegitems/vegitems';

/**
 * Generated class for the FoodtypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foodtype',
  templateUrl: 'foodtype.html',
})
export class FoodtypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodtypePage');
  }
  

  onClickVeg(){
    //take to veg options 
    this.navCtrl.push(VegitemsPage);


  }


  onClickNonVeg(){
    //take to non veg options

  }



}
