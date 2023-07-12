class Person {
    constructor(name, message) {
      this.name = name;
      this.message = message;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    sayMessage() {
      console.log(`You know what? I love you ${this.message} so much.`);
    }
  
    haveMore(message) {
      console.log(`I mean, I love you James!`);
    }
  }
  
  let christine = new Person('Christine', 'Babe');
  
  christine.sayHello();
  // => Hello, my name is Christine.
  christine.sayMessage();
  // => You know what? I love you babe so much.
  christine.haveMore();
  // => I mean, I love you James!
  christine;
  // => Person { name: 'Christine', message: 'Babe' }