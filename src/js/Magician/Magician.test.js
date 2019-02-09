import Magician from './Magician';

it('Создается персонаж с классом Magician и заданным именем', () => {
  const magician = new Magician('Magician');

  expect(magician).toEqual({
    name: 'Magician',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});
