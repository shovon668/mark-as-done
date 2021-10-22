var x = document.getElementsByClassName("btn btn-outline-secondary");
var totalll = x.length;
var var_done = 0;
for (i = 0; i < totalll; i++) {
    if (x[i].textContent.indexOf('Mark as done') >= 0) {
        x[i].click();
        var_done++;
    }
}


function pop_up() {
    if (var_done === 0) {
        alert("There is no unmarked activity.");
    } else if (var_done === 1) {
        alert(var_done + " activity marked as done.");
    } else {
        alert(var_done + " activities marked as done.");
    }
}

setTimeout(() => {
    pop_up();
}, 1000);