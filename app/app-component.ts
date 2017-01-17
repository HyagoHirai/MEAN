import {Component} from 'angular2/core';
import {Cliente} from './cliente';

@Component({
    selector: 'meu-app',
    template: `
        <h1> Aula 2 </h1>
        <h2> Listagem de Tarefas </h2>
        <ul>
            <li *ngFor="#tarefa of tarefas; #i = index">
                {{tarefa}} <a href="#" (click)="remover(i)">[X]</a>
            </li>
        </ul>
        <input type="text" name="tarefa" placeholder="Digite a Tarefa" [(ngModel)]="txtTarefa">
        <button (click)="adicionar()">Adicionar</button>

        <h1> Aula 3 </h1>
        <h2> {{txtListagem}} </h2>
        <p> Cliente selecionado: {{cliente.nome}} </p>
        <ul>
            <li *ngFor="#cli of clientes; #i = index">
                <a href="#" (click)="selecionar(i)">
                    {{cli.id}} - {{cli.nome}}
                </a>
            </li>
        </ul>
    `
})
export class AppComponent{
    public tarefas: string[] = [];
    public txtTarefa: string;
    private txtListagem: string;
    private clientes: Cliente[];
    private cliente: Cliente;

    constructor(){
        this.txtListagem = 'Listagem de Clientes';
        this.clientes = [
            new Cliente(1, "Alexandre");
            new Cliente(2, "Samuel");
        ]
        this.cliente = this.clientes[0];
    }

    selecionar(index: number): void {
        if(index < this.clientes.length) {
            this.cliente = this.clientes[index];
        }
    }

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