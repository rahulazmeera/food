import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {CheckoutPage} from '../checkout/checkout';

import { VegitemsProvider } from '../../providers/vegitems/vegitems';

/**
 * Generated class for the VegitemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vegitems',
  templateUrl: 'vegitems.html',
})
export class VegitemsPage {

  



  constructor(public navCtrl: NavController, public navParams: NavParams, public VegitemsProvider: VegitemsProvider) {
    
  }
  

  public cart:any[]=[];
  public cartCount=0;
  public price: any;



  ionViewDidLoad() {
    console.log('ionViewDidLoad VegitemsPage');
    this.cartCount = this.VegitemsProvider.shopcart.length;
  }








public itemsName: any[] = [
   {
"productname":"Jamkai",
"img_url":"https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/06/daliya-dosa-17.jpg",
"price":"40",
"productID":"122"
},
{
  
"productname":"Jamkai",
"img_url":"https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/06/daliya-dosa-17.jpg",
"price":"40",
"productID":"122"

},
{
"productname":"Jamkai",
"img_url":"https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/06/daliya-dosa-17.jpg",
"price":"40",
"productID":"122"
},
{
"productname":"Jamkai",
"img_url":"https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/06/daliya-dosa-17.jpg",
"price":"40",
"productID":"122"
},
{
    "productname":"Jamkai",
    "img_url":"https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/06/daliya-dosa-17.jpg",
    "price":"40",
    "productID":"122"
    },
    {
        "productname":"Jamkai",
        "img_url":"https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/06/daliya-dosa-17.jpg",
        "price":"40",
        "productID":"122"
        },
        {
            "productname":"Jamkai",
            "img_url":"https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/06/daliya-dosa-17.jpg",
            "price":"40",
            "productID":"122"
            }
];





//Get the items from the db
getIttems(){
  
  //this will give me the required items details

}



  //to add items to the cart 
 addItemsToCart(item: any){
  console.log("add button is clicked")
  
  console.log(item.price);
  let a = {price: item.price};
  this.cart.push(a);
  this.VegitemsProvider.setCartItems(a)
  this.cartCount = this.VegitemsProvider.shopcart.length;
   
 }





 PlaceOrder(){
  

 }


 checkoutpageOpen(){
   
   this.navCtrl.push(CheckoutPage)
   console.log("checkout button is clicked")
 }





}
