class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    attackOpponent(defender) {
        const attackRoll = this.rollDie();
        const damage = this.attack * attackRoll;

        const defenseRoll = defender.rollDie();
        const defense = defender.strength * defenseRoll;

        const damageDealt = Math.max(0, damage - defense);
        defender.health -= damageDealt;

        return {
            attacker: this.name,
            defender: defender.name,
            attackRoll,
            defenseRoll,
            damageDealt
        };
    }

    isAlive() {
        return this.health > 0;
    }
}

module.exports = Player;
