/*
2.2.2.1. Assassin
La classe Assassin (rusé et fourbe)
L'Assassin commence avec 6 points de vie et 20 points de mana. Il a 6 points de dégât.
L'Assassin aura une attaque spéciale Shadow hit lui permettant d'infliger 7 dégâts et de ne pas prendre de dégâts lors du prochain tour. Cette attaque coûte 20 mana.
Carl sera le personnage de la classe Assassin
*/
class Assassin extends Character  {
  constructor(name = 'Carl', hp = 6, mana = 20, dmg = 6, status = "playing") {
    super(hp, dmg, mana, status);
  }
 shadowHit () {
  this.mana -= 20;
  this.dmg += 7;
}
}

const assassin = new Assassin;