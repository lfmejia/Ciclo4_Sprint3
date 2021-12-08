import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './grupo13/menu/menu.component';
import { HomeComponent } from './grupo13/home/home.component';
import { LoginComponent } from './grupo13/login/login.component';
import { RegistroComponent } from './grupo13/registro/registro.component';
import { ReservaComponent } from './grupo13/reserva/reserva.component';
import { ConsultarReservaComponent } from './grupo13/consultar-reserva/consultar-reserva.component';
import { ContactoComponent } from './grupo13/contacto/contacto.component';
import { CheckingComponent } from './grupo13/checking/checking.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ReservaComponent,
    ConsultarReservaComponent,
    ContactoComponent,
    CheckingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
