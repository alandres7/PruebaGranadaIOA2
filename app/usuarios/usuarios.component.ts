import { Usuario } from './../modelos/usuario.model';
import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './../servicios/usuario.service';

@Component({
  selector: 'usuarios-componente',
  templateUrl: '/app/usuarios/usuarios.template.html'
})
export class UsuariosComponente implements OnInit  {
    private listaUsuarios: Array<Object>;

    constructor(private usuarioSvc: UsuarioService) {}

    ngOnInit() {
      this.usuarioSvc.listaUsuarios().subscribe(
        dato => this.listaUsuarios = dato,
        err => console.log(err),
        () => console.log(this.listaUsuarios)
      );
    }


    soloNombre() {
      this.listaUsuarios.forEach(usuario => {
        if ((<String>usuario['name']).includes(' ')){
          usuario['name'] = (<String>usuario['name']).split(' ')[0].trim();
        }
      });
    }
}
