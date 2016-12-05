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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var crearusuario_component_1 = require('./crearusuario.component');
var CrearUsuariosModulo = (function () {
    function CrearUsuariosModulo() {
    }
    CrearUsuariosModulo = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([{
                        path: 'crearusuario',
                        component: crearusuario_component_1.CrearUsuarioComponente
                    }])
            ],
            exports: [crearusuario_component_1.CrearUsuarioComponente],
            declarations: [crearusuario_component_1.CrearUsuarioComponente]
        }), 
        __metadata('design:paramtypes', [])
    ], CrearUsuariosModulo);
    return CrearUsuariosModulo;
}());
exports.CrearUsuariosModulo = CrearUsuariosModulo;
//# sourceMappingURL=crearusuario.module.js.map