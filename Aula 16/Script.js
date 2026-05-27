function calcularIdade() {

      // Variavel para capturar o valor digitado
    let anoDigitado = document.getElementById("inputAno").value;

      // Variavel para capturar ano atual
    let anoAtual = new Date().getFullYear();

      // Variavel para realizar o calculo da idade
    let idade = anoAtual - anoDigitado;

      // Exibe o resultado
    document.getElementById("resultado").innerHTML =
        "Você tem " + idade + " anos.";
    };