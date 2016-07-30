var name = "The Window";
vat object = {
    name : "my object",
    getNameFunc : function () {
        return function () {
            return this.name;
        };
    }
};