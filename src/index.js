import Character from './js/Character/Character';
import Bowman from './js/Bowman/Bowman';

const character = new Character('Котик');
const bowman = new Bowman();

bowman.health = 5;

console.log(character, bowman.levelUp());
