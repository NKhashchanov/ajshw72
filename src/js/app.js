import Bowerman from './Classes/bowerman';
import Swordsman from './Classes/swordsman';
import Magician from './Classes/magician';
import Undead from './Classes/undead';
import Zombie from './Classes/zombie';
import Daemon from './Classes/daemon';

const bowerman = new Bowerman('aaa');
const swordsman = new Swordsman('bbb');
const magician = new Magician('ccc');
const undead = new Undead('ddd');
const zombie = new Zombie('eee');
const daemon = new Daemon('fff');

bowerman.levelUp();
swordsman.levelUp();
magician.levelUp();
undead.levelUp();
zombie.levelUp();
daemon.levelUp();
