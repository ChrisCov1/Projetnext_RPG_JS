/*
2.2.2.1. Monk
La classe Monk (prêtre qui peut se guérir)
Le Monk commence avec 8 points de vie et 200 points de mana. Il a 2 points de dégât.
Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 PV. Elle coute 25 mana.
Moana sera le personnage de la classe Monk
*/
class Monk extends Character {
  constructor(name = 'Moana', hp = 8, mana = 200, dmg = 2, status = "playing") {
    super(name, hp, dmg, mana, status);
  }
 
 heal = () => {
  this.mana -= 25;
  this.hp += 8;
}
}

const monk = new Monk;