var Adresse = /** @class */ (function () {
    function Adresse(adressePrencipale, ville, codePostal, pays) {
        this.adressePrencipale = adressePrencipale;
        this.ville = ville;
        this.codePostal = codePostal;
        this.pays = pays;
    }
    return Adresse;
}());
var User = /** @class */ (function () {
    function User(prenom, nom, age, email, telephone, adresse, max) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.email = email;
        this.telephone = telephone;
        this.adresse = adresse;
        this.max = max;
    }
    User.prototype.increment = function () {
        for (var i = 1; i <= this.max; i++) {
            console.log("N°" + i);
        }
    };
    return User;
}());
var user1 = new User("Teti", "Lu", 50, "teti.lu@gmail.com", "043488493", new Adresse("6 Marbar", "Paris", 75002, "France"), 4);
var user2 = new User("Robu", "Domask", 91, "Robu.Domask@gmail.com", "043488493", new Adresse("2 Ansahal", "Paris", 75008, "France"), 2);
user1.increment();
user2.increment();
