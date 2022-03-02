var TypeCafe = /** @class */ (function () {
    function TypeCafe(name, intensiteСafe) {
        this.name = name;
        this.intensiteСafe = intensiteСafe;
    }
    return TypeCafe;
}());
var MachinaCafe = /** @class */ (function () {
    function MachinaCafe(brand, modelName, capacity, colour, material, prix, options) {
        this.brand = brand;
        this.modelName = modelName;
        this.capacity = capacity;
        this.colour = colour;
        this.material = material;
        this.prix = prix;
        this.options = options;
    }
    MachinaCafe.prototype.letDoTheCafe = function (type, add, //sugar, vanilla, milk 
    hotCold, // hot, cold
    maxTasse) {
        var countTass;
        for (countTass = 1; countTass <= maxTasse; countTass++) {
            console.log(this.modelName, " --- Cup N°" + countTass + " is ready !");
        }
        console.log("Merci ! Bonne cafe !");
    };
    return MachinaCafe;
}());
var machineCafe1 = new MachinaCafe("Philips", "Senseo Select CSA240/60", 0.9, "Deep Black", "Plastic", 69.95, ["Capuchino", "Black Cafe", "White Cofe", "Latte", "Cold Cafe"]);
machineCafe1.letDoTheCafe(new TypeCafe("Black Cafe", "max intensite"), ["sugar", "vanilla", "milk"], "hot", 5);
