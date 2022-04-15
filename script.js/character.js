class Character {
  constructor(name, hp, mana, dmg, status) {
 this.name = name;
 this.hp = hp;
 this.mana = mana;
 this.dmg = dmg;
 this.status = status;
};

  takeDamage (damage) {
    this.hp -= damage
    if (this.hp <= 0) {
      this.hp = 0
      this.status = "loser"
  }
  return damage
};

  dealDamage (victim) {
    if (this.dmg > victim.hp) {
        this.mana += 20
        console.log(`${this.name} +20 mana ${victim.name}`)
    }
    if (victim.hp == 0) {
      console.log(`${victim.name} est éliminé et ne peut plus jouer ni être attaqué. `)
      victim.status = "loser"
  } 
  if (this.status != "loser") {
        victim.takeDamage(this.dmg);
    console.log(victim.name + " a " + victim.hp + " HP !")
    }
};
}