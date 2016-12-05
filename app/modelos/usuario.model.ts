export class Usuario {
    name: string;
    email: string;
    phone: string;
    username: string;
    // no terminé de ingeniar lo que quería hacer con todos los atributos
    // nombreAtributos: string[] =
   // ['idUsuario', 'nombre', 'email', 'telefono', 'cuidadResidencia'];
   // atributos = {idUsuario: '',
   // nombre: ''};

  constructor() {
          this.username = '';
          this.name = '';
          this.email = '';
          this.phone = '';
      }

      getUsername(): string {
        return this.username;
      }
}
