//04-clases.ts

class Persona{
    public name:string;
    public lastname:string
    static referential: string = "Human";
    protected nombreApellido = " "; //Duck Typing -> String

    constructor(
        nameParameter:string,
        lastnameParameter: string,
    ) {
        this.name = nameParameter;
        this.lastname = lastnameParameter;
        this.nombreApellido = nameParameter + " " + lastnameParameter;
    }

    private showData() : string {
        return this.nombreApellido;
    }
}


class User extends Persona{
    constructor(
        nameParameter:string,
        lastnameParameter: string,
        public identificationCard: string, //Access modifier --> Class properties
        public maritalStatus: string //Access modifier --> Class properties
    ) {
        super(nameParameter,lastnameParameter);
    }
}

const person = new User(
    "Elvis",
    "Montaluisa",
    "0503408080",
    "Soltero"
);
/*
person.name;
person.lastname;
person.identificationCard;
person.maritalStatus;
*/