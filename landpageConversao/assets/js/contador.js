
var contadorRegressivo = new Date("Feb 22, 2023 12:00:00").getTime()
// aqui pode definir a data final da promoção

var atualizar = setInterval(function(){

    var data = new Date().getTime()
    var diferenca = contadorRegressivo - data

    var dias = Math.floor(diferenca / ( 1000 * 60 * 60 * 24))
    var horas = Math.floor((diferenca % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutos = Math.floor((diferenca % ( 1000 * 60 * 60)) / (1000 * 60))
    var segundos = Math.floor((diferenca % ( 1000 * 60)) / 1000)

    //variaveis criada para ajustar a hora exata que programado

    dias = dias < 10 ? "0" + dias : dias
    horas = horas < 10 ? "0" + horas : horas
    minutos = minutos < 10 ? "0" + minutos : minutos
    segundos = segundos < 10 ? "0" + segundos : segundos

    // indicador para acrescentar o zero quando estiver < que 10

    document.getElementById("oferta").innerHTML = dias + ":" + horas + ":" + minutos + ":" + segundos
    // adicionar caracteres ao contador

    if (distance < 0){
        clearInterval(atualizar)
        document.getElementById("oferta").innerHTML = "Oferta Expirada!"
    }
    // assim que acabar a promoção indicada irá aparecer a msg indicada
},1000)
