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
var nombre_usuario_pipe_1 = require('./nombre-usuario.pipe');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var usuarios_component_1 = require('./usuarios.component');
var usuario_service_1 = require('./../servicios/usuario.service');
var UsuariosModulo = (function () {
    function UsuariosModulo() {
    }
    UsuariosModulo = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule,
                router_1.RouterModule.forRoot([{
                        path: 'usuarios',
                        component: usuarios_component_1.UsuariosComponente
                    }])
            ],
            exports: [usuarios_component_1.UsuariosComponente],
            declarations: [usuarios_component_1.UsuariosComponente, nombre_usuario_pipe_1.NombreUsuarioPipe],
            providers: [usuario_service_1.UsuarioService]
        }), 
        __metadata('design:paramtypes', [])
    ], UsuariosModulo);
    return UsuariosModulo;
}());
exports.UsuariosModulo = UsuariosModulo;
//# sourceMappingURL=usuarios.module.js.map