import { EventEmitter } from "events";
const eventEmitter = new EventEmitter();

// Register custom event listener
const greetings = (name) => {
  console.log(`Assalam o alaikum ${name}`);
};

eventEmitter.on("greet", greetings);

eventEmitter.once("goodBye", (name) => {
  console.log("Good bye " + name);
});

eventEmitter.emit("greet", "Someone");
eventEmitter.emit("greet", "Someone");
eventEmitter.emit("goodBye", "Some one"); // only called first time when emitting..
// eventEmitter.removeListener("greet", greetings);
eventEmitter.off('greet', greetings);   // 


eventEmitter.emit("greet", "Someone new"); // No output because listener is removed
eventEmitter.emit("goodBye", "Someone new"); // No output because "goodBye" is a one-time listener and has already been used
