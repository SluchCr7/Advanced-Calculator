let input = document.getElementById('input')
// let buttons = document.querySelectorAll('button')


function display(e) {
    input.value += e
}

function calc() {
    input.value = eval(input.value)
}


function ChangeBinary() {
    // input.value = ""
    input.value = eval(input.value).toString(2)
}

function changeToOctal() {
    // input.value = Number(input.value).toString(8)
    input.value = eval(input.value).toString(8)
}

function changeToHexa() {
    input.value = eval(input.value).toString(16)
    // input.value = Number(input.value).toString(16)
}

const clearInput = () => {
    input.value = ''
}