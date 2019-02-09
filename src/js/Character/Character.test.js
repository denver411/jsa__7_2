import Character from './Character';

it('Создается персонаж с классом Character и заданным именем', () => {
  const character = new Character('Luntic');

  expect(character).toEqual({
    name: 'Luntic',
    level: 1,
    health: 100,
    attack: 0,
    defence: 0,
  });
});

it('Создается персонаж с классом Character c именем по умолчанию', () => {
  const character = new Character();

  expect(character).toEqual({
    name: 'Just a pawn',
    level: 1,
    health: 100,
    attack: 0,
    defence: 0,
  });
});

it('Уровень живого персонажа повышается', () => {
  const character = new Character();

  character.levelUp();
  expect(character.level).toBe(2);
});

it('Уровень убитого персонажа не повышается', () => {
  const character = new Character();

  character.health = 0;
  character.levelUp();
  expect(character.level).toBe(1);
  expect(character.levelUp()).toEqual(Error('Можно повысить класс только живого персонажа'));
});
