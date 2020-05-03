import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { OffTransactionsComponent } from './off-transactions/off-transactions.component';
import { AddTransactionsComponent } from './add-transactions/add-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    OffTransactionsComponent,
    AddTransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
