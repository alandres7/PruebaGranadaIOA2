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
var core_1 = require('@angular/core');
var usuario_service_1 = require('./../servicios/usuario.service');
var UsuariosComponente = (function () {
    function UsuariosComponente(usuarioSvc) {
        this.usuarioSvc = usuarioSvc;
    }
    UsuariosComponente.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioSvc.listaUsuarios().subscribe(function (dato) { return _this.listaUsuarios = dato; }, function (err) { return console.log(err); }, function () { return console.log(_this.listaUsuarios); });
    };
    UsuariosComponente.prototype.soloNombre = function () {
        this.listaUsuarios.forEach(function (usuario) {
            if (usuario['name'].includes(' ')) {
                usuario['name'] = usuario['name'].split(' ')[0].trim();
            }
        });
    };
    UsuariosComponente = __decorate([
        core_1.Component({
            selector: 'usuarios-componente',
            templateUrl: '/app/usuarios/usuarios.template.html'
        }), 
        __metadata('design:paramtypes', [usuario_service_1.UsuarioService])
    ], UsuariosComponente);
    return UsuariosComponente;
}());
exports.UsuariosComponente = UsuariosComponente;
//# sourceMappingURL=usuarios.component.js.map