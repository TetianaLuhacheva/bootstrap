
class Adresse{    
    adressePrencipale: string;
    ville: string;
    codePostal: number;
    pays: string;
    
    constructor(adressePrencipale: string,
        ville: string,
        codePostal: number,
        pays: string)
    {
        this.adressePrencipale = adressePrencipale ;
        this.ville = ville;  
        this.codePostal = codePostal;
        this.pays = pays
    }
}


class User{
    prenom:string;
    nom:string;
    age:number;
    email:string;
    telephone:string;
    adresse:Adresse;
    max:number; 

    constructor(prenom:string,
        nom:string,
        age:number,
        email:string,
        telephone:string,
        adresse:Adresse,        
        max:number)
    {        
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.email = email;
        this.telephone = telephone;
        this.adresse = adresse;
        this.max = max;
    }

    increment():void{
       for(let i:number = 1; i <= this.max; i++){
        console.log(this.nom + "N°" + i);
       }
    }


}


let user1 = new User("Teti", "Lu", 50, "teti.lu@gmail.com", "043488493", new Adresse("6 Marbar", "Paris", 75002, "France"), 4); 
let user2 = new User("Robu", "Domask", 91, "Robu.Domask@gmail.com", "043488493", new Adresse("2 Ansahal", "Paris", 75008, "France"), 2); 

user1.increment();
user2.increment();
 
