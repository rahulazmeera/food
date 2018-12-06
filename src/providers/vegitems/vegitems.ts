import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VegitemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VegitemsProvider {
  public shopcart:any[]=[];

  constructor(public http: HttpClient) {
   
    console.log('Hello VegitemsProvider Provider');
  }


//storing the data into array. 



 
getItems(){
 
 // this.http.get('http://localhost:3000').subscribe;

}


setCartItems(cartitems:any){

this.shopcart.push(cartitems);

}


getCartItems(){
  return this.shopcart;
}




}
