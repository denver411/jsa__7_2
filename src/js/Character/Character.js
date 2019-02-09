/**
 *  Базовый класс персонажа
 *
 * @param {string} name - Имя персонажа
 *
 */

class Character {
  constructor(name = 'Just a pawn') {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (!this.health) {
      return new Error('Можно повысить класс только живого персонажа');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;

    return this;
  }
}

export default Character;
