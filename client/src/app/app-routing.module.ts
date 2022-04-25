import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddplantComponent } from './addplant/addplant.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { LoginComponent } from './login/login.component';
import { OnlinePurchaseComponent } from './online-purchase/online-purchase.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { StoreComponent } from './store/store.component';
import { AuthService } from './auth.service';
//import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'store',pathMatch:'full'},
  {path: 'store',component:StoreComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'add-plant',component:AddplantComponent},
  {path: 'delivery',component:DeliveryComponent},
  {path: 'order',component:OrderComponent},
  {path: 'onlinePurchase',component:OnlinePurchaseComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthService]
})
export class AppRoutingModule { }
