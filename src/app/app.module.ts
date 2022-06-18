import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { ModelUpComponent } from './model/model-up/model-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    ModelUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
