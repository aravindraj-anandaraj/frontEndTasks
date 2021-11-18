let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');

window.addEventListener('onload', randomNum());

function randomNum() {
    in1.value = Math.round(Math.random() * 100);
    in2.value = Math.round(Math.random() * 100);
}

let btn = document.getElementById('btn');

function checkAddition() {

    let out = document.getElementById('out').value;
    let sum = parseInt(in1.value) + parseInt(in2.value);
    
    if (sum === parseInt(out)) {
        alert(`${out} was the correct answer`);
    } else {
        alert(`${out} is not correct. The answer is ${sum}`);
    }
    randomNum();
}