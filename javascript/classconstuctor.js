// class constuctor

class car {
    constructor(model,color,tire,brand,speed) {
        this.model=model;
        this.color=color;
        this.tire=tire;
        this.brand=brand;
        this.speed=speed;
    }
output(){console.log(` i need this ${this.model} model\n i need this ${this.color} color\n i need this ${this.tire} tire\n i need this ${this.brand} brand\n i need high ${this.speed} speed`)}

}

const finaloutput = new car("carens","silvermoon","MRF","kia",180);
finaloutput.output();


