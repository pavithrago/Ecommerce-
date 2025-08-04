import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Service/Product/product.service';

@Component({
  selector: 'app-productcategories',
  standalone: false,
  templateUrl: './productcategories.component.html',
  styleUrl: './productcategories.component.css'
})
export class ProductcategoriesComponent {
// used to retrieve the products from particular categories
products:any[]=[];
activeCategoryid:number=0;
constructor(private activatedRoute:ActivatedRoute, private productservice:ProductService){
this.activatedRoute.params.subscribe((res)=>{
this.activeCategoryid=res.id;
this.loadProducts();
})

}
loadProducts(){
  this.productservice.getProductbyCategories(this.activeCategoryid).subscribe((res:any)=>{
    console.log('Product Response:', res)
        this.products=res;
  })
}
}
