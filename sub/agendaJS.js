
var op = ""
var msg

bloqueiaBotao()

function agendamento(btn) {

    op = ""

    var botao = btn

    if (botao == "1") {
        botao = "primeiro"
    }

    if (botao == 6 || botao == 13 || botao == 20 || botao == 27) {

        alert("Não estamos disponíveis nos domingos!")

    }

    else {
        msg = prompt("O que deseja fazer dia " + botao + "?\n\n(1) Limpeza nos dentes\n(2) Clareamento nos dentes\n(3) Botar aparelho\n(4) Manutenção\n(5) Remoção dos Cisos\n(6) Visualizar horários marcados\n")
        
        if (msg == "") {
            alert("Digite o serviço que deseja marcar!")
        }
        else if (msg != null) {
            var msgL = msg.split('')

            if (msg < 1 || msg > 6) {
                alert("Escolha um número entre 1 a 6, conforme a lista.")
            }

            else if (msgL.length > 1) {
                alert("Escolha um número entre 1 a 6, conforme a lista.")
            }
        }
        if (msg == 6) {
            if (botao == "primeiro") {
                botao = 1
            }

            lista(botao)

        }

        if (msg >= 1 && msg <= 5) {
            if (botao == "primeiro") {
                botao = 1
            }

            verificaOp(msg)
            horarios(botao)

        }
    }
}

function horarios(numeroDoDia) {

    for (var pos = 0; pos < 30; pos++) {

        var botao = "dia" + numeroDoDia

        if (diass[pos] == botao) {

            var msg2 = prompt(op + "\nEscolha um horário dentre os disponíveis:\n" + dias[pos])

            if (msg2 == "") {
                alert("Digite o horário que deseja agendar!")
            }
            else if (msg2 != null) {
                var msgL = msg2.split('')
                if (msg2 < 1 || msg2 > 6) {
                    alert("Escolha um número entre 1 a 6, conforme a lista.")
                }
                else if (msgL.length > 1) {
                    alert("Escolha um número entre 1 a 6, conforme a lista.")
                }
            }
            if (msg2 >= 1 && msg2 <= 6) {
                var horario = msg2 - 1
                var day = dias[pos]

                if (day[horario] == "\nHorário indisponível  |  Limpeza nos dentes" || day[horario] == "\nHorário indisponível  |  Clareamento nos dentes" || day[horario] == "\nHorário indisponível  |  Botar aparelho" || day[horario] == "\nHorário indisponível  |  Manutenção" || day[horario] == "\nHorário indisponível  |  Remoção dos cisos") {
                    alert("Este horário não está disponível")
                }
                else {
                    day[horario] = "\nHorário indisponível  |  " + op
                    verificaCor(day)
                    localStorage.setItem("dias", JSON.stringify(dias))

                    alert("Horário marcado com sucesso!")
                }

            }
        }
    }

}

function lista(numeroDoDia) {

    for (var pos = 0; pos < 30; pos++) {

        var botao = "dia" + numeroDoDia

        if (diass[pos] == botao) {
            alert("Dia " + numeroDoDia + "\n\n" + dias[pos])
        }
    }

}

function verificaOp(msg) {

    if (msg == 1) {
        op = "Limpeza nos dentes"
    }
    if (msg == 2) {
        op = "Clareamento nos dentes"
    }
    if (msg == 3) {
        op = "Botar aparelho"
    }
    if (msg == 4) {
        op = "Manutenção"
    }
    if (msg == 5) {
        op = "Remoção dos cisos"
    }

}

function voltar() {
    window.location.href = ("../index.html")
}

function bloqueiaBotao() {

    document.getElementById("block1").disabled = true
    document.getElementById("block1").style.backgroundColor = "rgb(217, 244, 255)"
    document.getElementById("block1").style.color = "black"
    document.getElementById("block1").style.borderColor = "black"

    document.getElementById("block1").disabled = true
    document.getElementById("block1").style.backgroundColor = "rgb(217, 244, 255)"
    document.getElementById("block1").style.color = "black"
    document.getElementById("block1").style.borderColor = "black"

    document.getElementById("block1").disabled = true
    document.getElementById("block1").style.backgroundColor = "rgb(217, 244, 255)"
    document.getElementById("block1").style.color = "black"
    document.getElementById("block1").style.borderColor = "black"

    document.getElementById("block1").disabled = true
    document.getElementById("block1").style.backgroundColor = "rgb(217, 244, 255)"
    document.getElementById("block1").style.color = "black"
    document.getElementById("block1").style.borderColor = "black"

    document.getElementById("block1").disabled = true
    document.getElementById("block1").style.backgroundColor = "rgb(217, 244, 255)"
    document.getElementById("block1").style.color = "black"
    document.getElementById("block1").style.borderColor = "black"
}

var dias = []

var dia1 = []
var dia2 = []
var dia3 = []
var dia4 = []
var dia5 = []
var dia6 = []
var dia7 = []
var dia8 = []
var dia9 = []
var dia10 = []

var dia11 = []
var dia12 = []
var dia13 = []
var dia14 = []
var dia15 = []
var dia16 = []
var dia17 = []
var dia18 = []
var dia19 = []
var dia20 = []

var dia21 = []
var dia22 = []
var dia23 = []
var dia24 = []
var dia25 = []
var dia26 = []
var dia27 = []
var dia28 = []
var dia29 = []
var dia30 = []

var diass = []

var diaa1 = "dia1"
var diaa2 = "dia2"
var diaa3 = "dia3"
var diaa4 = "dia4"
var diaa5 = "dia5"
var diaa6 = "dia6"
var diaa7 = "dia7"
var diaa8 = "dia8"
var diaa9 = "dia9"
var diaa10 = "dia10"

var diaa11 = "dia11"
var diaa12 = "dia12"
var diaa13 = "dia13"
var diaa14 = "dia14"
var diaa15 = "dia15"
var diaa16 = "dia16"
var diaa17 = "dia17"
var diaa18 = "dia18"
var diaa19 = "dia19"
var diaa20 = "dia20"

var diaa21 = "dia21"
var diaa22 = "dia22"
var diaa23 = "dia23"
var diaa24 = "dia24"
var diaa25 = "dia25"
var diaa26 = "dia26"
var diaa27 = "dia27"
var diaa28 = "dia28"
var diaa29 = "dia29"
var diaa30 = "dia30"

var diasC = []

var diaC1 = 0
var diaC2 = 0
var diaC3 = 0
var diaC4 = 0
var diaC5 = 0
var diaC6 = 0
var diaC7 = 0
var diaC8 = 0
var diaC9 = 0
var diaC10 = 0

var diaC11 = 0
var diaC12 = 0
var diaC13 = 0
var diaC14 = 0
var diaC15 = 0
var diaC16 = 0
var diaC17 = 0
var diaC18 = 0
var diaC19 = 0
var diaC20 = 0

var diaC21 = 0
var diaC22 = 0
var diaC23 = 0
var diaC24 = 0
var diaC25 = 0
var diaC26 = 0
var diaC27 = 0
var diaC28 = 0
var diaC29 = 0
var diaC30 = 0

encheArray(dia1), dias.push(dia1), diass.push(diaa1), diasC.push(diaC1)
encheArray(dia2), dias.push(dia2), diass.push(diaa2), diasC.push(diaC2)
encheArray(dia3), dias.push(dia3), diass.push(diaa3), diasC.push(diaC3)
encheArray(dia4), dias.push(dia4), diass.push(diaa4), diasC.push(diaC4)
encheArray(dia5), dias.push(dia5), diass.push(diaa5), diasC.push(diaC5)
encheArray(dia6), dias.push(dia6), diass.push(diaa6), diasC.push(diaC6)
encheArray(dia7), dias.push(dia7), diass.push(diaa7), diasC.push(diaC7)
encheArray(dia8), dias.push(dia8), diass.push(diaa8), diasC.push(diaC8)
encheArray(dia9), dias.push(dia9), diass.push(diaa9), diasC.push(diaC9)
encheArray(dia10), dias.push(dia10), diass.push(diaa10), diasC.push(diaC10)
encheArray(dia11), dias.push(dia11), diass.push(diaa11), diasC.push(diaC11)
encheArray(dia12), dias.push(dia12), diass.push(diaa12), diasC.push(diaC12)
encheArray(dia13), dias.push(dia13), diass.push(diaa13), diasC.push(diaC13)
encheArray(dia14), dias.push(dia14), diass.push(diaa14), diasC.push(diaC14)
encheArray(dia15), dias.push(dia15), diass.push(diaa15), diasC.push(diaC15)
encheArray(dia16), dias.push(dia16), diass.push(diaa16), diasC.push(diaC16)
encheArray(dia17), dias.push(dia17), diass.push(diaa17), diasC.push(diaC17)
encheArray(dia18), dias.push(dia18), diass.push(diaa18), diasC.push(diaC18)
encheArray(dia19), dias.push(dia19), diass.push(diaa19), diasC.push(diaC19)
encheArray(dia20), dias.push(dia20), diass.push(diaa20), diasC.push(diaC20)
encheArray(dia21), dias.push(dia21), diass.push(diaa21), diasC.push(diaC21)
encheArray(dia22), dias.push(dia22), diass.push(diaa22), diasC.push(diaC22)
encheArray(dia23), dias.push(dia23), diass.push(diaa23), diasC.push(diaC23)
encheArray(dia24), dias.push(dia24), diass.push(diaa24), diasC.push(diaC24)
encheArray(dia25), dias.push(dia25), diass.push(diaa25), diasC.push(diaC25)
encheArray(dia26), dias.push(dia26), diass.push(diaa26), diasC.push(diaC26)
encheArray(dia27), dias.push(dia27), diass.push(diaa27), diasC.push(diaC27)
encheArray(dia28), dias.push(dia28), diass.push(diaa28), diasC.push(diaC28)
encheArray(dia29), dias.push(dia29), diass.push(diaa29), diasC.push(diaC29)
encheArray(dia30), dias.push(dia30), diass.push(diaa30), diasC.push(diaC30)

function atualizaLS() {

    if (JSON.parse(localStorage.getItem("dias")) != null) {
        dias = JSON.parse(localStorage.getItem("dias"))
    }

    if (JSON.parse(localStorage.getItem("cores")) != null) {
        diasC = JSON.parse(localStorage.getItem("cores"))
    }

    salvaCor()

}

function encheArray(lista) {

    lista.push("(1) 09:30 as 10:30")
    lista.push("\n(2) 10:30 as 11:30")
    lista.push("\n(3) 13:00 as 14:00")
    lista.push("\n(4) 14:00 as 15:00")
    lista.push("\n(5) 15:00 as 16:00")
    lista.push("\n(6) 16:00 as 17:00")

}

function verificaCor(day) {
    var pos = dias.indexOf(day)

    if (day[0] == "\nHorário indisponível  |  Limpeza nos dentes" || day[0] == "\nHorário indisponível  |  Clareamento nos dentes" || day[0] == "\nHorário indisponível  |  Botar aparelho" || day[0] == "\nHorário indisponível  |  Manutenção" || day[0] == "\nHorário indisponível  |  Remoção dos cisos") {
        if (day[1] == "\nHorário indisponível  |  Limpeza nos dentes" || day[1] == "\nHorário indisponível  |  Clareamento nos dentes" || day[1] == "\nHorário indisponível  |  Botar aparelho" || day[1] == "\nHorário indisponível  |  Manutenção" || day[1] == "\nHorário indisponível  |  Remoção dos cisos") {
            if (day[2] == "\nHorário indisponível  |  Limpeza nos dentes" || day[2] == "\nHorário indisponível  |  Clareamento nos dentes" || day[2] == "\nHorário indisponível  |  Botar aparelho" || day[2] == "\nHorário indisponível  |  Manutenção" || day[2] == "\nHorário indisponível  |  Remoção dos cisos") {
                if (day[3] == "\nHorário indisponível  |  Limpeza nos dentes" || day[3] == "\nHorário indisponível  |  Clareamento nos dentes" || day[3] == "\nHorário indisponível  |  Botar aparelho" || day[3] == "\nHorário indisponível  |  Manutenção" || day[3] == "\nHorário indisponível  |  Remoção dos cisos") {
                    if (day[4] == "\nHorário indisponível  |  Limpeza nos dentes" || day[4] == "\nHorário indisponível  |  Clareamento nos dentes" || day[4] == "\nHorário indisponível  |  Botar aparelho" || day[4] == "\nHorário indisponível  |  Manutenção" || day[4] == "\nHorário indisponível  |  Remoção dos cisos") {
                        if (day[5] == "\nHorário indisponível  |  Limpeza nos dentes" || day[5] == "\nHorário indisponível  |  Clareamento nos dentes" || day[5] == "\nHorário indisponível  |  Botar aparelho" || day[5] == "\nHorário indisponível  |  Manutenção" || day[5] == "\nHorário indisponível  |  Remoção dos cisos") {

                            diasC[pos]++
                            salvaCor()

                        }
                    }
                }
            }
        }
    }

}

function salvaCor() {

    for (var pos = 0; pos < 30; pos++) {

        if (diasC[pos] == 1) {

            var dia = pos + 1

            document.getElementById(dia).style.backgroundColor = "rgb(238, 88, 88)"
            localStorage.setItem("cores", JSON.stringify(diasC))

        }

    }

}
