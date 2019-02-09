import Zombie from './Zombie';

it('Создается персонаж с классом Zombie и заданным именем', () => {
  const zombie = new Zombie('Zombie');

  expect(zombie).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});
