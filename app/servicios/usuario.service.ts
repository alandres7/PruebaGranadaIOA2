import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../modelos/usuario.model';

@Injectable()
export class UsuarioService {
    private baseURL: string= 'https://jsonplaceholder.typicode.com';
    private header: Headers;

    constructor(private http: Http) {
        this.header = new Headers();
        this.header.append('X-Auth-Token', '23cada21bd8948feaaa690fb65ee765a');
    }

    listaUsuarios() {
        let listUsuariosURI = '/users';
        return this.http.get(this.baseURL + listUsuariosURI, { headers: this.header }).map(res => res.json());
    }

    crearUsuario(usuario: Usuario) {
        this.header.append('Content-Type', 'application/json');
        let crearUsuarioURI = '/posts';
        return this.http.post(this.baseURL + crearUsuarioURI, JSON.stringify(usuario), { headers: this.header }).map(res => res.json());
    }
}
