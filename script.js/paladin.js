/*
2.2.2.1. Paladin
La classe Paladin (chevalier puissant et défensif)
Le Paladin commence avec 16 points de vie et 160 points de mana. Il a 3 points de dégât.
Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.
Ulder sera le personnage de la classe Paladin
*/
class Paladin extends Character {
  constructor(name, hp = 16, mana = 160, dmg = 3, status = "playing") {
    super(name, hp, dmg, mana, status);
}  

healingLighting = () => {
  this.mana = this.mana - 40;
  this.dmg = 4;
  this.hp = this.hp + 5;
}
}

const paladin = new Paladin;