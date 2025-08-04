import { Routes} from "@angular/router";
import { LoginComponent } from "./Admin/login/login.component";
import { LayoutComponent } from "./Admin/layout/layout.component";
import { ProductsComponent } from "./Admin/products/products.component";
import { CategoriesComponent } from "./Admin/categories/categories.component";
import { LandingPageComponent } from "./Website/landing-page/landing-page.component";
import { ProductcategoriesComponent } from "./Website/productcategories/productcategories.component";
import { ListProductsComponent } from "./Website/list-products/list-products.component";
import { CheckoutsComponent } from "./Website/checkouts/checkouts.component";
import { RegisterComponent } from "./register/register.component";

export const routes:Routes=[{
    path:'',
    redirectTo:'shop',
    pathMatch:'full'
},
{
    path:'login',
    component:LoginComponent
},
{
path: 'register', 
component: RegisterComponent
},
{
     path:'',
     component:LandingPageComponent,
     children:[{
        path:'shop',
        component:ListProductsComponent
  
     },
     {
        path:'products/:id',
        component:ProductcategoriesComponent
  
     }
    ]
},

{
    path:'',
    component:LayoutComponent,
    children:[{
        path:'products',
        component:ProductsComponent
    },
    {
    path:'category',
    component:CategoriesComponent
    }
]
},
{
    path:'checkout',
    component:CheckoutsComponent,
}
]


