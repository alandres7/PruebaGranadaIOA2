import { NombreUsuarioPipe } from './nombre-usuario.pipe';

import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsuariosComponente }  from './usuarios.component';

import { UsuarioService } from './../servicios/usuario.service';

@NgModule({
  imports: [ CommonModule,
        RouterModule.forRoot([{
          path: 'usuarios',
        component: UsuariosComponente
      }])
        ],
        exports: [ UsuariosComponente ],
  declarations: [ UsuariosComponente, NombreUsuarioPipe ],
  providers: [UsuarioService]
})
export class UsuariosModulo { }
