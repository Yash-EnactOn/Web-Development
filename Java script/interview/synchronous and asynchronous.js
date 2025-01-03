// Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. (ex. api call)
console.log("Hello");
console.log("World");
setTimeout(function(){       /*(Asynchronous)*/
  console.log("Hello 2");
}, 1000);
console.log("Hello 3");
// time 1000 to 0 hoy to pan same output ave Hello, World and Hello 3 goes to main stack. Hello 2 side stack ma jay.


// Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it. Each task requires an answer before moving on to the next iteration



