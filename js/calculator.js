var resultElement = document.getElementById('result');

function clr() {
    resultElement.value = '';
}

function dis(item) {
    resultElement.value += item;
}
function solve() {
    var result = resultElement.value;
    console.log(result); 
    resultElement.value = eval(result);
}