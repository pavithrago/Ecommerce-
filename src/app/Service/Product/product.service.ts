import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../Constant/constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
 public CardUpdate:Subject<boolean>=new Subject();
  getCategory(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.CATEGORIES);
  }
  getProductbyCategories(id:number){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.PRODUCT_BY_CATEGORIES+id);
  }
  getProducts(){
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.PRODUCT);
  }
  saveproduct(obj:any){
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATEPRODUCT,obj);   //post ku 2 arguments irukum url and object
  }
  updateproduct(obj:any){
    return this.http.put(`${Constant.API_END_POINT}${Constant.METHODS.UPDATE_PRODUCT}/${obj.id}`, obj);
  }
  deleteproduct(id: number){
    return this.http.delete(`${Constant.API_END_POINT}${Constant.METHODS.DELETE_PRODUCT}/${id}`);
  }
  addtocart(obj:any){
   return this.http.post(Constant.API_END_POINT+Constant.METHODS.ADD_TO_CART,obj);
  }
  getCartDatabyId(id:number){
  return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_CART_BY_ID+id);
  }
  deleteCartDatabyId(id:number){
    return this.http.delete(Constant.API_END_POINT+Constant.METHODS.DELETE_CART_BY_ID+id);
    }
    placeorder(obj:any){
      return this.http.post(Constant.API_END_POINT+Constant.METHODS.CHECKOUTS,obj);
     }
     register(obj:any){
      return this.http.post(Constant.API_END_POINT+Constant.METHODS.REGISTER,obj);
     }
     login(obj:any){
      return this.http.post(Constant.API_END_POINT+Constant.METHODS.LOGIN,obj);
     }
}
