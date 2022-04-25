import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddplantComponent } from './addplant/addplant.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { LoginComponent } from './login/login.component';
import { OnlinePurchaseComponent } from './online-purchase/online-purchase.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { StoreComponent } from './store/store.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddplantComponent,
    ContactComponent,
    DeliveryComponent,
    LoginComponent,
    OnlinePurchaseComponent,
    OrderComponent,
    SignupComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
