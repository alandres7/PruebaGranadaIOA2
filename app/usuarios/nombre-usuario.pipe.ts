import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nombreusuario'
})
export class NombreUsuarioPipe implements PipeTransform{
    transform(value: string): any {
        if (value.includes(' ')) {
            return value.split(' ')[0].trim();
        }
    }
}
