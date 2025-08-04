import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

 isSidePanelVisible:boolean=false;
  productobj: Product = {
    id: 0,                                                                                                                                                            
    name: '',
    description: '',
    price: 0,
    categoryId: 0,
    imageUrl: '',
    deliveryTimeSpan: ''
  };
 CategoryList:any[]=[];
 ProductsList:any[]=[];
constructor(private productservice:ProductService){}
ngOnInit(): void {
  this.getAllCategory();
  this.getproducts();
}
getproducts(){
  this.productservice.getProducts().subscribe((res:any)=>{
    this.ProductsList=res??[];
  })
}
getAllCategory(){
  this.productservice.getCategory().subscribe((res:any)=>{           //it asks the data
    console.log("API:",res);
    this.CategoryList=res??[];                              //store the api data
  })
}
OnUpdate() {
  this.productservice.updateproduct(this.productobj).subscribe(
    (res: any) => {
      console.log("Update Response:", res);  // 🔥 Logs response in console

      if (res && res.result) {
        alert("Product Updated Successfully");
        this.getproducts();
      } else {
        alert(res?.message || "Something went wrong!");
      }
    },
    (error) => {
      console.error("Update Error:", error);  // 🔥 Logs error if update fails
      alert(error?.error?.message || "Update failed!");
    }
  );
}

OnDelete(item:any){
  const isDelete=confirm('Are you want to Delete?')
  if(isDelete){
    this.productservice.deleteproduct(item.id).subscribe((res:any)=>{
      debugger;
      if(res&&res.result){
        alert('Product Deleted');
        this.getproducts();
      }
      else{
        alert(res.message);
      }
    })
  }
}
OnSave(){
  this.productservice.saveproduct(this.productobj).subscribe((res:any)=>{
    debugger;
    if(res&&res.result){
      alert("Product Created");
      this.getproducts();
    }
    else{
      alert("Product Created Successfully");
    }
    
  })
  this.onReset();
this.CloseSidePanel();

}
OnEdit(item:any){
  this.productobj={... item};
  this.OpenSidePanel();
}
OpenSidePanel(){
  this.isSidePanelVisible=true;
}
CloseSidePanel(){
  this.isSidePanelVisible=false;
}
onReset() {
  this.productobj = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    categoryId: 0,
    imageUrl: '',
    deliveryTimeSpan: ''
  };
}
} 