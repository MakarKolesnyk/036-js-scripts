const start = 10;
const end = 20;
const secretNumber = 17;

for (let i = start; i < end; i++) {
  if (i === secretNumber) {
    continue;
  }
  console.log(i);
}

while (true) {
  const userInput = prompt("Enter number");
  if (userInput === null) {
    alert("Dont cancel");
    continue;
    alert("After continue") // this row will not work
  }
  if (Number(userInput === secretNumber)) {
    alert("You Win");
    break;
  }
}
