import { UsuarioService } from './../../servicios/usuario.service';
import { Usuario } from './../../modelos/usuario.model';
import { Component, Inject, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'crearusuario-componente',
  templateUrl: '/app/usuarios/adminusuario/crear.usuario.template.html'
})
export class CrearUsuarioComponente implements OnInit  {
    formcrearusuario: FormGroup;
    usuario: Usuario= new Usuario();
    constructor(private fb: FormBuilder, private usuarioSvc: UsuarioService) {}

    ngOnInit() {
      this.formcrearusuario = this.fb.group({
        name: [this.usuario.name, Validators.compose([Validators.required])],
        username: [this.usuario.username, Validators.compose([Validators.required])],
        email: this.usuario.email,
        phone: [ this.usuario.phone,
        Validators.compose([Validators.minLength(6), Validators.pattern('/^[0-9]+$/')]) ]
      });
    }


    crearUsuario() {
      let id: Object;
      let usuario: Usuario = new Usuario();
      usuario.name = this.formcrearusuario.value['name'];
      usuario.username = this.formcrearusuario.value['username'];
      usuario.email = this.formcrearusuario.value['email'];
      usuario.phone = this.formcrearusuario.value['phone'];
      console.log(usuario);
      this.usuarioSvc.crearUsuario(usuario).subscribe(
        dato => id = dato,
        err => console.log(err),
        () => console.log(id)
      );
      console.log(this.formcrearusuario.value);
    }

}
