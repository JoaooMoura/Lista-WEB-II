function CalculadoraIMC() {

    let nome = document.getElementById("nome").value
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value) / 100


    let m = peso / (altura * altura)
    switch (true) {
        case (m < 16):
            resultado = "Baixo peso muito grave"
            break
        case (m >= 16 && m < 17):
            resultado = "Baixo peso grave"
            break
        case (m >= 17 && m < 18.5):
            resultado = "Baixo peso"
            break
        case (m >= 18.5 && m < 25):
            resultado = "Peso normal"
            break
        case (m >= 25 && m < 30):
            resultado = "Sobrepeso"
            break
        case (m >= 30 && m < 35):
            resultado = "Obesidade grau 1"
            break
        case (m >= 35 && m < 40):
            resultado = "Obesidade grau 2"
            break
        default:
            resultado = "Obesidade grau 3"
            break
    }
    document.getElementById("resultado").innerHTML =
        `${nome} possui índice de massa corporal igual a ${m.toFixed(2)}, sendo classificado como: ${resultado}`

}

function faixamedia() {
    let idade = parseInt(document.getElementById("idade").value)
    let faixa = ""
    if (idade >= 0 && idade < 15) {
        faixa = "Criança"
    } else if (idade >= 15 && idade < 30) {
        faixa = "Jovem"
    } else if (idade >= 30 && idade < 60) {
        faixa = "Adulto"
    } else if (idade >= 60) {
        faixa = "Idoso"
    }
    let Pratica = parseFloat(document.getElementById("Pratica").value)
    let Prova = parseFloat(document.getElementById("Prova").value)
    let TT = parseFloat(document.getElementById("TT").value)
    let media = ((Pratica * 2) + (Prova * 3) + (TT * 5)) / 10
    document.getElementById("faixa-etaria").innerHTML =
        `Você está na faixa etária: ${faixa}`
    document.getElementById("media").innerHTML =
        `A média ponderada é: ${media.toFixed(2)}`
}


function calculoFrete() {
    let distancia = Number(document.getElementById('distancia').value)
    let quantidade = Number(document.getElementById('quantidade').value)
    let regiao = document.getElementById('regiao').value
    let rastreamento = document.getElementById('rastreamento').value

    let precoNormal, desconto
    if (regiao === "1") {
        precoNormal = 1.00
        desconto = 0.10
    } else if (regiao === "2") {
        precoNormal = 1.20
        desconto = 0.12
    } else if (regiao === "3") {
        precoNormal = 1.30
        desconto = 0.13
    } else {
        document.getElementById("resultado").innerHTML = "Selecione uma região válida."
        return
    }

    let valorPecas
    if (quantidade <= 1000) {
        valorPecas = quantidade * precoNormal
    } else {
        const precoDesconto = precoNormal * (1 - desconto)
        valorPecas = (1000 * precoNormal) + ((quantidade - 1000) * precoDesconto)
    }

    const valorKm = distancia * 6

    const taxaRastreamento = rastreamento === "S" ? 200.00 : 0.00

    const total = valorPecas + valorKm + taxaRastreamento

    document.getElementById('resultado').style.display = 'block'
    document.getElementById('resultado').innerHTML = `
        <strong>Resultados:</strong><br>
        Taxa de rastreamento: R$ ${taxaRastreamento.toFixed(2)}<br>
        Valor do frete pelas peças: R$ ${valorPecas.toFixed(2)}<br>
        Valor do frete por quilômetro: R$ ${valorKm.toFixed(2)}<br>
        <strong>Total do frete: R$ ${total.toFixed(2)}</strong>
    `
}

function folhaPagamento() {
    let codigo = Number(document.getElementById('codigo').value)
    let horas = Number(document.getElementById('horas').value)
    let turno = document.getElementById('turno').value
    let categoria = document.getElementById('categoria').value
    let salarioMin = Number(document.getElementById('salarioMin').value)

    let salarioHora
    switch (true) {
        case (turno === "M" || turno === "V") && (categoria === "G"):
            salarioHora = salarioMin * (4 / 100)
            break
        case (turno === "M" || turno === "V") && (categoria === "F"):
            salarioHora = salarioMin * (1 / 100)
            break
        case (turno === "N" && categoria === "F"):
            salarioHora = salarioMin * (2 / 100)
            break
        default:
            document.getElementById('resultado').innerHTML = "Turno ou categoria inválida."
            return
    }

    let salarioInicial = salarioHora * horas
    let auxilioAlimentacao
    if (salarioInicial > 800) {
        auxilioAlimentacao = salarioInicial * (25 / 100)
    }
    else if (salarioInicial >= 800 && salarioInicial <= 1200) {
        auxilioAlimentacao = salarioInicial * (20 / 100)
    }
    else {
        auxilioAlimentacao = salarioInicial * (15 / 100)
    }
    let salarioFinal = salarioInicial + auxilioAlimentacao
    document.getElementById('resultado').style.display = 'block'
    document.getElementById('resultado').innerHTML = `
        <strong>Resultados:</strong><br>
        Codigo Funcionário: ${codigo}<br>
        Horas Trabalhadas: ${horas}<br>
        Salario Hora: R$ ${salarioHora.toFixed(2)}<br>
        Salario Iniclial: R$ ${salarioInicial.toFixed(2)}<br>
        Auxilio Alimentação: R$ ${auxilioAlimentacao.toFixed(2)}<br>
        Salario Final: R$ ${salarioFinal.toFixed(2)}<br>
    `
}

function calculo() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let operacao = document.getElementById("operacao").value
    let resultado
    switch (operacao) {
        case "soma":
            resultado = num1 + num2
            break
        case "subtração":
            resultado = num1 - num2
            break
        default:
            alert("Operação inválida! Use 'soma' ou 'subtração'.")
            return
    }
    document.getElementById("resultado").innerHTML = `O resultado é: ${resultado}`
}

function dataExtenso() {
    let dataInput = document.getElementById("data").value
    let partesData = dataInput.split("/")

    let dia = parseInt(partesData[0])
    let mes = parseInt(partesData[1])
    let ano = parseInt(partesData[2])

    let meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]

    if (partesData.length !== 3 || isNaN(dia) || isNaN(mes) || isNaN(ano) || mes < 1 || mes > 12 || dia > 31 || dia < 1) {
        alert("Data inválida! Use o formato DD/MM/AAAA.")
        document.getElementById("resultado").innerHTML = "Data inválida. Use o formato DD/MM/AAAA."
        return
    }

    let bissexto = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)

    if (mes == 2) {
        if ((bissexto && dia > 29) || (!bissexto && dia > 28)){
            document.getElementById("resultado").innerHTML = "Data inválida. Fevereiro não tem esse dia."
            return
        }
    }
    else if ((mes === 4 || mes === 6 || mes ===9 || mes === 11) && dia > 30){
        document.getElementById("resultado").innerHTML = "Data inválida. Esse mês não tem mais de 30 dias."
        return
    }
    document.getElementById("resultado").innerHTML = `Data por extenso: ${dia} de ${meses[mes - 1]} de ${ano}`
}

