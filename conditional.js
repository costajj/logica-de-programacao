let shouldRun = true;
shouldRun = false;

function checkRun() {
    if (shouldRun) {
        return console.log("verdadeiro!");
    }

    console.log("O código rodou, mas shouldRun é falso!!");
}

checkRun();

