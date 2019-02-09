import Swordsman from './Swordsman';

it('Создается персонаж с классом Swordsman и заданным именем', () => {
  const swordsman = new Swordsman('Swordsman');

  expect(swordsman).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  });
});
