export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 50;
    this.death = false;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += (this.attack * (20 / 100));
      this.defence += (this.defence * (20 / 100));
    }
    if (this.death === true) {
      throw new Error('Мертвые не апаются!');
    }
  }
}
