import Undead from './Undead';

it('Создается персонаж с классом Undead и заданным именем', () => {
  const undead = new Undead('Undead');

  expect(undead).toEqual({
    name: 'Undead',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  });
});
