import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FoodtypePage} from '../foodtype/foodtype';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 
  onClickLogin(){
   //go to next page. 
    
     this.navCtrl.push(FoodtypePage);
     //console.log("login functiion clicked");
  }






}
