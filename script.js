const input = document.getElementById('input')
var valor1
var metodo

document.getElementById('btn-1').addEventListener('click', function(){
    input.value += '1'
})

document.getElementById('btn-2').addEventListener('click', function(){
    input.value += '2'
})

document.getElementById('btn-3').addEventListener('click', function(){
    input.value += '3'
})

document.getElementById('btn-4').addEventListener('click', function(){
    input.value += '4'
})

document.getElementById('btn-5').addEventListener('click', function(){
    input.value += '5'
})

document.getElementById('btn-6').addEventListener('click', function(){
    input.value += '6'
})

document.getElementById('btn-7').addEventListener('click', function(){
    input.value += '7'
})

document.getElementById('btn-8').addEventListener('click', function(){
    input.value += '8'
})

document.getElementById('btn-9').addEventListener('click', function(){
    input.value += '9'
})

document.getElementById('btn-0').addEventListener('click', function(){
    input.value += '0'
})

document.getElementById('btn-ponto').addEventListener('click', function(){
    input.value += '.'
})

//------------------------------------------------------------------------------------------------------------------------------------------

document.getElementById('btn-adicao').addEventListener('click', function(){
    metodo = "adicao"
    valor1 = parseFloat(input.value)
    input.value = ""
})

document.getElementById('btn-subtracao').addEventListener('click', function(){
    metodo = "subtracao"
    valor1 = parseFloat(input.value)
    input.value = ""
})

document.getElementById('btn-multiplicacao').addEventListener('click', function(){
    metodo = "multiplicacao"
    valor1 = parseFloat(input.value)
    input.value = ""
})

document.getElementById('btn-divisao').addEventListener('click', function(){
    metodo = "divisao"
    valor1 = parseFloat(input.value)
    input.value = ""
})

//------------------------------------------------------------------------------------------------------------------------------------------

document.getElementById('btn-C').addEventListener('click', function(){
    input.value = ""
})

document.getElementById('btn-CE').addEventListener('click', function(){
    input.value = ""
    valor1 = ""
    valor2 = ""
})

document.getElementById('btn-igual').addEventListener('click', function(){
    var valor2 = parseFloat(input.value)

    if(metodo == "adicao"){
        var resultado = valor1 + valor2
    }if(metodo == "subtracao"){
        var resultado = valor1 - valor2
    }if(metodo == "multiplicacao"){
        var resultado = valor1 * valor2
    }if(metodo == "divisao"){
        var resultado = valor1 / valor2
    }

    input.value = resultado
    valor1 = ""
    valor2 = ""
})