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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.baseURL = 'https://jsonplaceholder.typicode.com';
        this.header = new http_1.Headers();
        this.header.append('X-Auth-Token', '23cada21bd8948feaaa690fb65ee765a');
    }
    UsuarioService.prototype.listaUsuarios = function () {
        var listUsuariosURI = '/users';
        return this.http.get(this.baseURL + listUsuariosURI, { headers: this.header }).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.crearUsuario = function (usuario) {
        this.header.append('Content-Type', 'application/json');
        var crearUsuarioURI = '/posts';
        return this.http.post(this.baseURL + crearUsuarioURI, JSON.stringify(usuario), { headers: this.header }).map(function (res) { return res.json(); });
    };
    UsuarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map