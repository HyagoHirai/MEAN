import {Component} from 'angular2/core';

@Component({
    selector: 'meu-app',
    template: `
        <h1>Tarefas</h1>
        <h2>Lista de Tarefas</h2>
        <ul>
            <li *ngFor="#tarefa of tarefas; #i = index">
                {{tarefa}} <a href="#" (click)="remover(i)">[X]</a>
            </li>
        </ul>
        <input type="text" name="tarefa" placeholder="Digite a Tarefa" [(ngModel)]="txtTarefa">
        <button (click)="adicionar()">Adicionar</button>
    `
})
export class AppComponent{
    public tarefas: string[] = [];
    public txtTarefa: string;

    adicionar() {
        if(this.txtTarefa != '') {
            this.tarefas.push(this.txtTarefa);
            this.txtTarefa = '';
        }
    }

    remover(index:number) {
        this.tarefas.splice(index,1);
    }
}