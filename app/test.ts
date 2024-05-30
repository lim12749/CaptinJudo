class Animal
{
    name: string;
    sound : string;

    constructor(_name:string, _sound:string)
    {
        /* constructor 완성하기 */
        this.name = _name;
        this.sound = _sound;
    }
    explain()
    {
        console.log(`${this.name} says ${this.sound}`)
    }
}

// "duck", "quack"
const duck = new Animal("duck","quack");
duck.explain();

enum Car {
    Bus
}