function thisIsThePlayer(callback) {
  const player = { name: "Spartacus", life: 100, strength: 100, agility: 100 };
  callback(player);
}

function sayHello(aPlayer) {
  console.log(`Hello, ${aPlayer.name}`);
}
// Write a function sayHello that greets: "Hello, Spartacus". (Where "Spartacus" is the player name)

thisIsThePlayer(sayHello);
