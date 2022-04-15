class Game {
  constructor(paladin, fighter, monk, assassin, berzerker, turnLeft = 10) {
    this.paladin = paladin;
    this.fighter = fighter;
    this.monk = monk;
    this.assassin = assassin;
    this.berzerker = berzerker;
    this.turnLeft = turnLeft;
}

newTurn = this.turnLeft -=1 ; 

watchStats = () => {
        
  }
}

const game = new Game
game.newTurn
