import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";
import { NavbarModule } from "./navigation/navebar.module";
import { MatTableModule } from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { DialogComponent } from '../app/pages/dialog/dialog.component';
import {  MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [AppComponent, DialogComponent ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule,
    NavbarModule,
    PagesModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
