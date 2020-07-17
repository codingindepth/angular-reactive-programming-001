import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';

import {ProductListComponent} from './products/product-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,ProductListComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
