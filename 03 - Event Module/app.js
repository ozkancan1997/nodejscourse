const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial_event", () => console.log("tutorial event occured yay"));

eventEmitter.on("tutorial_event2", num => console.log(num*3));

eventEmitter.emit("tutorial_event");

eventEmitter.emit("tutorial_event2",4);

class Bear extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }

    get name(){
        return this._name;
    }
}

let yogi = new Bear("Yogi"); let bobo = new Bear("Bobo");

yogi.on("name", ()=> console.log(yogi.name));
bobo.on("name", ()=> console.log(bobo.name));

yogi.emit("name"); bobo.emit("name"); //emits synchronously