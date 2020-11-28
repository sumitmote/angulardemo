import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SformComponent } from './student/sform.component';
import { StabComponent } from './student/stab.component';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,SformComponent,StabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
