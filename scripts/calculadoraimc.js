function calculaIMC() {
    //entrada

    let peso = document.getElementById("peso").value

    let altura = document.getElementById("altura").value

    //processamento

    let valorIMC = Number(peso) / (Number(altura) * Number(altura));

    //saída

    document.getElementById("resultado").textContent = "Seu IMC é: " + valorIMC;

    if (valorIMC < 18.5) {
        document.getElementById("classificacao").textContent = "Classificação: Abaixo do peso";
    } else if (valorIMC >= 18.5 && valorIMC < 25) {
        document.getElementById("classificacao").textContent = "Classificação: Peso normal";
    } else if (valorIMC >= 25 && valorIMC < 30) {
        document.getElementById("classificacao").textContent = "Classificação: Sobrepeso";
    } else {
        document.getElementById("classificacao").textContent = "Classificação: Obesidade";
    }




}

