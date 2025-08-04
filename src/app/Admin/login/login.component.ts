import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from '../../Service/Product/product.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginobj:any={
    "userName": "",
    "password": "",
  }
  registerobj:any={
  "userName": "",
  "password": "",
  "confirmPassword": ""
  }
  isRegister:boolean=false;

constructor(private router:Router,private productservice:ProductService){}
  ngOnInit(): void {
   const reg=localStorage.getItem('isRegister');
   this.isRegister=reg?JSON.parse(reg):false;
  }
Onregister(){
  this.productservice.register(this.registerobj).subscribe(res=>{
    alert("Registered Successfully");
    this.toggleRegister(new Event('click'));
  },
err=>{
  console.error("Registration failed");
});

}

Onlogin(){
/*if(this.loginobj.userName=="shiva123" && this.loginobj.password =='shiva@123'){
localStorage.setItem('role','user');
this.router.navigateByUrl('/products')
}
else if(this.loginobj.userName=="admin" && this.loginobj.password =='admin@123'){
 localStorage.setItem('role','admin');
 this.router.navigateByUrl('/products')
}*/
this.productservice.login(this.loginobj).subscribe((res:any)=>{
  if(res.result){
    this.router.navigateByUrl('/shop')
  }
  else{
    alert(res.message);
  }
})
}
  toggleRegister(event:Event){
    event.preventDefault(); 
    this.isRegister=!this.isRegister;
  }

}


