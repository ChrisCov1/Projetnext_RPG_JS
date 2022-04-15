/*
2.2.2.1. Fighter
La classe Fighter (combattant équilibré sous tous les bords)
Le Fighter commence avec 12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).
Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts. Jusqu'au prochain tour, chaque coup reçu lui infligera 2 dégâts de moins. Elle coute 20 mana.
Grace sera le personnage de la classe Fighter
*/
class Fighter extends Character {
  constructor(name = 'Grace', hp = 12, mana = 40, dmg = 4, status = 'playing') {
    super(hp,dmg,mana, status);
    this.name = name;
  }
  darkVision = () => {
    this.mana -= 20;
    this.dmg += 5;
    this. hp -= 2;
  }
}

const fighter = new Fighter;