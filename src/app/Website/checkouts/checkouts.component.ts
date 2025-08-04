import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';

@Component({
  selector: 'app-checkouts',
  standalone: false,
  templateUrl: './checkouts.component.html',
  styleUrl: './checkouts.component.css'
})
export class CheckoutsComponent implements OnInit {
  cartList:any[]=[]
  checkoutobj:any={  
  "id": 0,
  "customerId": 0,
  "discount": 0,
  "totalAmount": 0,
  "checkoutDate": "2025-04-08T11:13:04.523Z",
  "deliveryAddress1": "",
  "deliveryAddress2": "",
  "deliveryLocation": "",
  "deliveryPincode": ""
  }
  constructor(private productservice:ProductService){}
  
  ngOnInit(): void {
    this.getCartbyCustomerId();
  }
  getCartbyCustomerId(){
    this.productservice.getCartDatabyId(1).subscribe((res:any)=>{
     console.log("Cart API Response: ", res);
this.cartList=res;
console.log(this.cartList); 

    })
   }
   placeorder(){
    
   }
   
}
