System.register([], function(exports_1) {
    var Cliente;
    return {
        setters:[],
        execute: function() {
            Cliente = (function () {
                function Cliente(id, nome) {
                    this.id = id;
                    this.nome = nome;
                }
                return Cliente;
            })();
            exports_1("Cliente", Cliente);
        }
    }
});
//# sourceMappingURL=cliente.js.map