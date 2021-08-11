class mammal {
    constructor (species, name, age){
        this.species = species;
        this.name = name;
        this.age = age;
        this.mammaryGland = true;
    }

    incrementAge () {
        this.age++
    }
}

class Lion extends mammal {
    constructor(species, name, age, manEater){
        super(species, name, age)
        this.manEater = manEater;
    }

    eatZebras (animals){
        return animals.filter(animal => animal.species !== 'zebra');
    }
}

const zeca = new mammal ('zebra', 'zeca', 6);
const pompeu = new mammal('gnu', 'pompeu', 5);
const gnus = new mammal('cavalo', 'gnus', 3);
const mufasa = new Lion('leão', 'mufasa', 7, false);

const animals = [zeca, pompeu, gnus];

console.log(mufasa);