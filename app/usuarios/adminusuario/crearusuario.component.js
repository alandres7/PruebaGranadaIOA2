"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var usuario_service_1 = require('./../../servicios/usuario.service');
var usuario_model_1 = require('./../../modelos/usuario.model');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var CrearUsuarioComponente = (function () {
    function CrearUsuarioComponente(fb, usuarioSvc) {
        this.fb = fb;
        this.usuarioSvc = usuarioSvc;
        this.usuario = new usuario_model_1.Usuario();
    }
    CrearUsuarioComponente.prototype.ngOnInit = function () {
        this.formcrearusuario = this.fb.group({
            name: [this.usuario.name, forms_1.Validators.compose([forms_1.Validators.required])],
            username: [this.usuario.username, forms_1.Validators.compose([forms_1.Validators.required])],
            email: this.usuario.email,
            phone: [this.usuario.phone,
                forms_1.Validators.compose([forms_1.Validators.minLength(6), forms_1.Validators.pattern('/^[0-9]+$/')])]
        });
    };
    CrearUsuarioComponente.prototype.crearUsuario = function () {
        var id;
        var usuario = new usuario_model_1.Usuario();
        usuario.name = this.formcrearusuario.value['name'];
        usuario.username = this.formcrearusuario.value['username'];
        usuario.email = this.formcrearusuario.value['email'];
        usuario.phone = this.formcrearusuario.value['phone'];
        console.log(usuario);
        this.usuarioSvc.crearUsuario(usuario).subscribe(function (dato) { return id = dato; }, function (err) { return console.log(err); }, function () { return console.log(id); });
        console.log(this.formcrearusuario.value);
    };
    CrearUsuarioComponente = __decorate([
        core_1.Component({
            selector: 'crearusuario-componente',
            templateUrl: '/app/usuarios/adminusuario/crear.usuario.template.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, usuario_service_1.UsuarioService])
    ], CrearUsuarioComponente);
    return CrearUsuarioComponente;
}());
exports.CrearUsuarioComponente = CrearUsuarioComponente;
//# sourceMappingURL=crearusuario.component.js.map