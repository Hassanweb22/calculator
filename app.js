
function getName(num) {
    var name = document.getElementById("result");
    name.value += num
    console.log(num)
}

function clearResult() {
    var name = document.getElementById("result")
    name.value = " "
}

function subtract() {
    var name = document.getElementById("result")
    name.value=name.value.slice(0,-1)
}

function getResult() {
    var name = document.getElementById("result")
    name.value=eval(name.value)
}


