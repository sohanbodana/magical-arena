const Player = require('./Player');

class Arena {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    fight() {
        let attacker = this.player1.health < this.player2.health ? this.player1 : this.player2;
        let defender = this.player1.health < this.player2.health ? this.player2 : this.player1;

        let round = 1;
        while (this.player1.isAlive() && this.player2.isAlive()) {
            console.log(`Round ${round}: ${attacker.name} attacks ${defender.name}`);
            const attackResult = attacker.attackOpponent(defender);
            console.log(`   ${attacker.name} rolls ${attackResult.attackRoll} and ${defender.name} rolls ${attackResult.defenseRoll}`);
            console.log(`   ${attacker.name} deals ${attackResult.damageDealt} damage to ${defender.name}`);
            console.log(`${defender.name}'s health: ${defender.health}\n`);

            [attacker, defender] = [defender, attacker]; // Switch roles for next round
            round++;
        }

        const winner = this.player1.isAlive() ? this.player1 : this.player2;
        console.log(`${winner.name} wins the game!`);
    }
}

module.exports = Arena;
