import { EventEmitter } from "events";
const eventEmitter = new EventEmitter();

const listener1 = () => console.log("Listener 1");
const listener2 = () => console.log("Listener 2");

eventEmitter.on("myEvent", listener1);
eventEmitter.on("myEvent", listener2);

eventEmitter.emit("myEvent"); // Outputs: Listener 1, Listener 2

// Remove all listeners for "myEvent"
eventEmitter.removeAllListeners("myEvent");

eventEmitter.emit("myEvent"); // No output, as all listeners are removed
