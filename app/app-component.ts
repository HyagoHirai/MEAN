import {Component} from 'angular2/core';
import {Cliente} from './cliente';
import { CORE_DIRECTIVES } from 'angular2/common';
import {Progress} from './progress.directive';
import {Bar} from './bar.component';
import {Progressbar} from './progressbar.component';

@Component({
    selector: 'meu-app',
    template: `
        <h3> Aula 2 </h3>
        <h4> Listagem de Tarefas </h4>
        <ul>
            <li *ngFor="#tarefa of tarefas; #i = index">
                {{tarefa}} <a href="#" (click)="remover(i)">[X]</a>
            </li>
        </ul>
        <input type="text" name="tarefa" placeholder="Digite a Tarefa" [(ngModel)]="txtTarefa">
        <button (click)="adicionar()">Adicionar</button>

        <h3> Aula 3 </h3>
        <h4> {{txtListagem}} </h4>
        <p> Cliente selecionado: {{cliente.nome}} </p>
        <ul>
            <li *ngFor="#cli of clientes; #i = index">
                <a href="#" (click)="selecionar(i)">
                    {{cli.id}} - {{cli.nome}}
                </a>
            </li>
        </ul>

        <h4>Angular 2 Progressbar Example</h4>
        <progressbar class="progress-striped" value="55" type="warning" max="200">55%</progressbar>

        <hr/>
        <h4>Angular 2 Dynamic Progressbar Example</h4>
        <button type="button" class="btn btn-sm btn-default" (click)="generateNewProgressValues()">Generate New Values</button>

        <progressbar [animate]="false" [max]="max" [value]="currentValue">
        <span style="color:white; white-space:nowrap;">{{currentValue}} / {{max}}</span>
        </progressbar>

        <hr/>
        <h4>Angular 2 Progressbar With Animation Example</h4>
        <progressbar [animate]="true" [value]="currentValue" [type]="type"><b>{{currentValue}}%</b></progressbar>
        <hr/>
    `,
    directives: [Progress, Bar, Progressbar,CORE_DIRECTIVES],
})
export class AppComponent{
    public tarefas: string[] = [];
    public txtTarefa: string;
    private txtListagem: string;
    private clientes: Cliente[];
    private cliente: Cliente;

    public max:number = 200;
    public currentValue:number;
    public type:string;
    
    public stackedValues:any[] = [];

    constructor(){
        this.txtListagem = 'Listagem de Clientes';
        this.clientes = [
            new Cliente(1, "Alexandre"),
            new Cliente(2, "Samuel"),
        ]
        this.cliente = this.clientes[0];

        this.generateNewProgressValues();
        this.generateStackedValues();
    }


    private selecionar(index: number): void {
        if(index < this.clientes.length) {
            this.cliente = this.clientes[index];
        }
    }

    private adicionar() {
        if(this.txtTarefa != '') {
            this.tarefas.push(this.txtTarefa);
            this.txtTarefa = '';
        }
    }

    private remover(index:number) {
        this.tarefas.splice(index,1);
    }

    private generateNewProgressValues() {
        let value = Math.floor((Math.random() * 100) + 1);
        let type:string;

        if (value < 20) {
            type = 'success';
        } else if (value < 40) {
            type = 'info';
        } else if (value < 60) {
            type = 'warning';
        } else {
            type = 'danger';
        }
        this.currentValue = value;
        this.type = type;
    };

    private generateStackedValues() {
        let types = ['success', 'info', 'warning', 'danger'];

        this.stackedValues = [];
        let total = 0;
        for (let i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
            let index = Math.floor((Math.random() * 4));
            let value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stackedValues.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
}