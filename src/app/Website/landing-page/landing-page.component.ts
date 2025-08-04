import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import id from '@angular/common/locales/id';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  productList:any[]=[];
  CategoryList:any[]=[];
  cartList:any[]=[];
  isRegister:boolean=false;
 constructor(private productservice:ProductService,private router:Router,private route:ActivatedRoute){
  this.productservice.CardUpdate?.subscribe((res:any)=>{
    this.getCartbyCustomerId();
  })

 }
 ngOnInit(): void {
     this.getAllProducts();
     this.getAllCategory();
    this.getCartbyCustomerId();

 }
 getAllProducts(){
  this.productservice.getProducts().subscribe((res:any)=>{
    console.log("Response from API: ", res); 
    this.productList=res;
  })
 }
 getAllCategory(){
  this.productservice.getCategory().subscribe((res:any)=>{
    this.CategoryList=res;
  })
 }
 getCartbyCustomerId(){
  this.productservice.getCartDatabyId(1).subscribe((res:any)=>{
    console.log("Cart API Response: ", res);

 this.cartList=res;
  })
 }
 navigatetoProducts(id:number){
this.router.navigate(['products',id])
 }
 remove(id:number){
  this.productservice.deleteCartDatabyId(id).subscribe((res:any)=>{
    this.getCartbyCustomerId();
  })
 }
 toggleLoginRegister(state:boolean){
  localStorage.setItem('isRegister', JSON.stringify(state));
}
}
