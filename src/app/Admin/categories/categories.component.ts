import { Component } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  products$:Observable<any>;
constructor(private productservice:ProductService){
  this.products$=this.productservice.getCategory();
  
}
getAllCategory(){

}

  }