import Bowman from './Bowman';

it('Создается персонаж с классом Bowman и заданным именем', () => {
  const bowman = new Bowman('Bowman');

  expect(bowman).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  });
});
