import Daemon from './Daemon';

it('Создается персонаж с классом Daemon и заданным именем', () => {
  const daemon = new Daemon('Daemon');

  expect(daemon).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  });
});
