System.register(['angular2/core', './cliente', 'angular2/common', './progress.directive', './bar.component', './progressbar.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cliente_1, common_1, progress_directive_1, bar_component_1, progressbar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cliente_1_1) {
                cliente_1 = cliente_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (progress_directive_1_1) {
                progress_directive_1 = progress_directive_1_1;
            },
            function (bar_component_1_1) {
                bar_component_1 = bar_component_1_1;
            },
            function (progressbar_component_1_1) {
                progressbar_component_1 = progressbar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tarefas = [];
                    this.max = 200;
                    this.stackedValues = [];
                    this.txtListagem = 'Listagem de Clientes';
                    this.clientes = [
                        new cliente_1.Cliente(1, "Alexandre"),
                        new cliente_1.Cliente(2, "Samuel"),
                    ];
                    this.cliente = this.clientes[0];
                    this.generateNewProgressValues();
                    this.generateStackedValues();
                }
                AppComponent.prototype.selecionar = function (index) {
                    if (index < this.clientes.length) {
                        this.cliente = this.clientes[index];
                    }
                };
                AppComponent.prototype.adicionar = function () {
                    if (this.txtTarefa != '') {
                        this.tarefas.push(this.txtTarefa);
                        this.txtTarefa = '';
                    }
                };
                AppComponent.prototype.remover = function (index) {
                    this.tarefas.splice(index, 1);
                };
                AppComponent.prototype.generateNewProgressValues = function () {
                    var value = Math.floor((Math.random() * 100) + 1);
                    var type;
                    if (value < 20) {
                        type = 'success';
                    }
                    else if (value < 40) {
                        type = 'info';
                    }
                    else if (value < 60) {
                        type = 'warning';
                    }
                    else {
                        type = 'danger';
                    }
                    this.currentValue = value;
                    this.type = type;
                };
                ;
                AppComponent.prototype.generateStackedValues = function () {
                    var types = ['success', 'info', 'warning', 'danger'];
                    this.stackedValues = [];
                    var total = 0;
                    for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                        var index = Math.floor((Math.random() * 4));
                        var value = Math.floor((Math.random() * 30) + 1);
                        total += value;
                        this.stackedValues.push({
                            value: value,
                            max: value,
                            type: types[index]
                        });
                    }
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        template: "\n        <h3> Aula 2 </h3>\n        <h4> Listagem de Tarefas </h4>\n        <ul>\n            <li *ngFor=\"#tarefa of tarefas; #i = index\">\n                {{tarefa}} <a href=\"#\" (click)=\"remover(i)\">[X]</a>\n            </li>\n        </ul>\n        <input type=\"text\" name=\"tarefa\" placeholder=\"Digite a Tarefa\" [(ngModel)]=\"txtTarefa\">\n        <button (click)=\"adicionar()\">Adicionar</button>\n\n        <h3> Aula 3 </h3>\n        <h4> {{txtListagem}} </h4>\n        <p> Cliente selecionado: {{cliente.nome}} </p>\n        <ul>\n            <li *ngFor=\"#cli of clientes; #i = index\">\n                <a href=\"#\" (click)=\"selecionar(i)\">\n                    {{cli.id}} - {{cli.nome}}\n                </a>\n            </li>\n        </ul>\n\n        <h4>Angular 2 Progressbar Example</h4>\n        <progressbar class=\"progress-striped\" value=\"55\" type=\"warning\" max=\"200\">55%</progressbar>\n\n        <hr/>\n        <h4>Angular 2 Dynamic Progressbar Example</h4>\n        <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"generateNewProgressValues()\">Generate New Values</button>\n\n        <progressbar [animate]=\"false\" [max]=\"max\" [value]=\"currentValue\">\n        <span style=\"color:white; white-space:nowrap;\">{{currentValue}} / {{max}}</span>\n        </progressbar>\n\n        <hr/>\n        <h4>Angular 2 Progressbar With Animation Example</h4>\n        <progressbar [animate]=\"true\" [value]=\"currentValue\" [type]=\"type\"><b>{{currentValue}}%</b></progressbar>\n        <hr/>\n    ",
                        directives: [progress_directive_1.Progress, bar_component_1.Bar, progressbar_component_1.Progressbar, common_1.CORE_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map