import { EventEmitter, Injectable } from '@angular/core'

import { LogService } from '../shared/log.service'

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>()
    static criouNovoCurso = new EventEmitter<string>()

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap']

    constructor(private logSrvice: LogService) {
        console.log('CursosService')
    }

    getCursos() {
        this.logSrvice.consoleLog('Obtendo lista de cursos')
        return this.cursos
    }

    addCurso(curso: string) {
        this.logSrvice.consoleLog(`Criando um novo curso ${curso}`)
        this.cursos.push(curso)
        this.emitirCursoCriado.emit(curso)
        CursosService.criouNovoCurso.emit(curso)
    }
}
    