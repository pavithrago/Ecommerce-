import { Component } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: false,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
productList:any[]=[];
CategoryList:any[]=[];
constructor(private productservice:ProductService,private router:Router){

}
ngOnInit(): void {
   this.getAllProducts();
   this.getAllCategory();


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
addtocart(product:any){
  const addtocartobj={
  "customerId":1,
  "productId": product.id,
  "quantity": 1,
  "productName": product.name,
  "productPrice": product.price,
  "productImageUrl": product.imageUrl
       }
 this.productservice.addtocart(addtocartobj).subscribe((res:any)=>{
    if(res.result){
      console.log("Add to cart response: ", res);
      this.productservice.CardUpdate.next(true)
      alert("Product added to cart")
    }
    else{
      alert(res.message);
    }
       })
       console.log("Sending to backend:", addtocartobj);


}
navigatetoProducts(id:number){
this.router.navigate(['products',id])
}

}