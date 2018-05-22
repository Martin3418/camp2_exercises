// Insert code here

/*
An aquarium contain fishes and algaes
Fish has name and sex
Algae has a size in cm
The aquarium has a method to add a fish
The aquarium has a method to add an algue
The aquarium has a method to pass time, each turn we make some actions
Each turn, we want to display the number of algaes and list fishes with name and sexes
The aquarium should contain different kind of fishes (some carnivorous and some vegan)
Each turn, fishes try to eat something (algue or other fishes if they are vegan or carnivorous)
If something was eaten, it should be removed from the aquarium
*/


class Aquarium {
  constructor(fishes = [], algaes =[]) {
    this.fishes = fishes;
    this.algaes = algaes;
    this.time = 0;
  }

  addFish(newFish) {
    this.fishes.push(newFish);
  }

  addAlgae(newAlgae) {
    this.algaes.push(newAlgae);
  }

  endTurn() {
    console.log(this.time);
    console.log(this.fishes);
    console.log(this.algaes);

    // if (this.fishes.length > 1) {
    //   this.time++;
    // } else {
    //   this.time = 0;
    //   return;
    // }

    if ((this.time % 2) === 0) {
      fishBeingEaten;
      fishEatingAnAlgae;
    }
    this.endTurn();

    function fishEatingAnAlgae() {
      this.algaes.pop();
    }

    function fishBeingEaten() {
      this.fishes.pop();
    }

  }

  repeatEndTurn(numberWished){
    let i = 0;
    while(i<numberWished){
      endTurn();
      i++
    }
  }

}

class Fish {
  constructor(name, sex, vegan) {
    this.name = name;
    this.sex = sex;
    this.vegan = vegan;
  }

  eat(aquarium){
    if(this.vegan){
      aquarium.algaes.pop();
    }
  }
}

class Algae {
  constructor(size) {
    this.size = size;
  }
}

const myAquarium = new Aquarium([], []);
const fishBob = new Fish ("Bob", "M", 1);
const fishBobine = new Fish ("Bobine", "F", 1);
const algae12 = new Algae ("12");

// myAquarium.addFish(fishBob);
//
// myAquarium.addFish(fishBobine);
//
// myAquarium.addAlgae(algae12);
//
// myAquarium.endTurn();

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
