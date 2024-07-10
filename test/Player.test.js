const Player = require('../src/Player');

test('Player takes damage', () => {
    const player = new Player('Player', 50, 5, 10);
    player.health -= 10;
    expect(player.health).toBe(40);
});

test('Player is alive', () => {
    const player = new Player('Player', 50, 5, 10);
    expect(player.isAlive()).toBe(true);
    player.health = 0;
    expect(player.isAlive()).toBe(false);
});
