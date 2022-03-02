class TypeCafe{
    name:string;
    intensiteСafe: string;

    constructor( name:string,
        intensiteСafe: string) {
            this.name= name;
            this.intensiteСafe = intensiteСafe;
        }
}
  
class MachinaCafe{
    brand: string;
    modelName:string;
    capacity: number;
    colour:string;
    material:string;
    prix: number; 
    options: string[];

    constructor(brand: string,
        modelName:string,
        capacity: number,
        colour:string,
        material:string,
        prix: number,
        options: string[]){
            this.brand = brand;
            this.modelName = modelName;
            this.capacity = capacity;
            this.colour = colour;
            this.material = material;
            this.prix = prix;
            this.options = options;
        }
    
    letDoTheCafe(type:TypeCafe,  
        add:string[], //sugar, vanilla, milk 
        hotCold: string, // hot, cold
        maxTasse:number){
        
        let countTass:number;

        for(countTass = 1; countTass <= maxTasse; countTass++ ){
            console.log(this.modelName, " --- Cup N°" + countTass + " is ready !")
        }

        console.log("Merci ! Bonne cafe !")
    }
      
}


let machineCafe1 = new MachinaCafe( "Philips" ,
    "Senseo Select CSA240/60",
    0.9,
    "Deep Black",
    "Plastic",
    69.95,
    ["Capuchino", "Black Cafe", "White Cofe", "Latte", "Cold Cafe"])


machineCafe1.letDoTheCafe(new TypeCafe("Black Cafe", "max intensite"), ["sugar", "vanilla", "milk"],  "hot",  5);

