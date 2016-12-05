"use strict";
var Usuario = (function () {
    // no terminé de ingeniar lo que quería hacer con todos los atributos
    // nombreAtributos: string[] =
    // ['idUsuario', 'nombre', 'email', 'telefono', 'cuidadResidencia'];
    // atributos = {idUsuario: '',
    // nombre: ''};
    function Usuario() {
        this.username = '';
        this.name = '';
        this.email = '';
        this.phone = '';
    }
    Usuario.prototype.getUsername = function () {
        return this.username;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.model.js.map