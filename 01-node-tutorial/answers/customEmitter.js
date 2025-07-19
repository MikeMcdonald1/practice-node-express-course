const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.on("status", (status, user) => {
  console.log(`${user} is really, really ${status} `);
});

emitter.emit("greet", "Mike");
emitter.emit("status", "cool!", "Mike");
