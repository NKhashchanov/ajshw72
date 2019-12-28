import Bowerman from '../Classes/bowerman';
import Undead from '../Classes/undead';

test('should level up', () => {
  const bowerman = new Bowerman('PewPew');
  bowerman.levelUp();

  const expected = {
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: 'PewPew',
    death: false,
  };

  expect(bowerman).toEqual(expected);
});

test('should throw Error', () => {
  const result = () => {
    const undead = new Undead('skele');
    undead.levelUp();
  };

  expect(result).toThrowError(new Error('Мертвые не апаются!'));
});
