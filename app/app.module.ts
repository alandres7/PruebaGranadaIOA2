import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UsuariosModulo }  from './usuarios/usuarios.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CrearUsuariosModulo }  from './usuarios/adminusuario/crearusuario.module';

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, 
  HttpModule, UsuariosModulo, CrearUsuariosModulo ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
