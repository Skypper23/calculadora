var resultado = document.querySelector("#resultado_txt");
var resultado_anterior;

function num0() {
    resultado.innerHTML += "0";
}
function num1() {
    resultado.innerHTML += "1";
}
function num2() {
    resultado.innerHTML += "2";
}
function num3() {
    resultado.innerHTML += "3";
}
function num4() {
    resultado.innerHTML += "4";
}
function num5() {
    resultado.innerHTML += "5";
}
function num6() {
    resultado.innerHTML += "6";
}
function num7() {
    resultado.innerHTML += "7";
}
function num8() {
    resultado.innerHTML += "8";
}
function num9() {
    resultado.innerHTML += "9";
}
function igual() {
    var expressao = resultado.innerText;
    // Verifica se a expressão contém uma porcentagem
    var porcentagemIndex = expressao.indexOf('%');
    if (porcentagemIndex !== -1) {
        // Extrai o número antes do símbolo de porcentagem
        var numeroAntesDaPorcentagem = expressao.substring(0, porcentagemIndex);
        // Extrai o número depois do símbolo de porcentagem
        var numeroDepoisDaPorcentagem = expressao.substring(porcentagemIndex + 1);
        // Converte o número antes do símbolo de porcentagem em um número decimal
        var valorDecimal = parseFloat(numeroAntesDaPorcentagem) / 100;
        // Realiza a operação matemática normalmente com o valor decimal e o número depois da porcentagem
        expressao = valorDecimal + '*' + numeroDepoisDaPorcentagem;
    }
    var resultadoFinal = eval(expressao);
    // Verifica se o resultado é um número float e o arredonda para 3 casas decimais
    if (Number.isFinite(resultadoFinal) && !Number.isInteger(resultadoFinal)) {
        resultadoFinal = parseFloat(resultadoFinal.toFixed(3));
    }
    resultado_anterior = resultadoFinal;
    resultado.innerHTML = resultadoFinal;
}
function adição() {
    resultado.innerHTML += "+";
}
function Clear() {
    resultado.innerHTML = "";
}
function Del() {
    var textoAtual = resultado.innerHTML;
    resultado.innerHTML = textoAtual.slice(0, -1); // Remove o último caracter
}
function subtração() {
    resultado.innerHTML += "-";
}
function multiplicação() {
    resultado.innerHTML += "*";
}
function divisão() {
    resultado.innerHTML += "/";
}
function percentagem() {
    resultado.innerHTML += "%";
}
function Ans() {
    resultado.innerHTML += resultado_anterior;
}
function virgula() {
    resultado.innerHTML += '.'
}