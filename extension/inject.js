let markButtons = document.getElementsByClassName("btn btn-outline-secondary");
let markedDone = 0;

for (markButton of markButtons) {
  if (markButton.textContent.includes("Mark as done")) {
    markButton.click();
    markedDone++;
  }
}

function pop_up() {
  if (markedDone === 0) {
    alert("There is no unmarked activity.");
  } else if (markedDone === 1) {
    alert(markedDone + " activity marked as done.");
  } else {
    alert(markedDone + " activities marked as done.");
  }
}

setTimeout(() => {
  pop_up();
}, 1000);
