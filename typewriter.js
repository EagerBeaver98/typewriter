const sentence = "Coding is fun when done with friends.";

let count = 0;

const interval = setInterval(() => {
  if (count < sentence.length - 1) {
    process.stdout.write(sentence[count]);
    count ++;
  } else {
    clearInterval(interval);
    console.log("");
  }
}, 50);