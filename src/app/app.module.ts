import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { OffTransactionsComponent } from './off-transactions/off-transactions.component';
import { AddTransactionsComponent } from './add-transactions/add-transactions.component';
import { DataService } from './services/data/data.service';

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
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
