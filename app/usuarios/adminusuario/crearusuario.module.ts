import { CommonModule } from '@angular/common';
import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CrearUsuarioComponente }  from './crearusuario.component';

@NgModule({

  imports: [ CommonModule, FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([{
          path: 'crearusuario',
        component: CrearUsuarioComponente
      }])
        ],
        exports: [ CrearUsuarioComponente ],
  declarations: [ CrearUsuarioComponente ]
})
export class CrearUsuariosModulo { }
