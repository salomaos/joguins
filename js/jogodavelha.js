$(document).ready(function () {
    $("#btn-comecar").mouseup(function () {
        var jogador1 = $("#jogador1").val();
        var jogador2 = $("#jogador2").val();

        $("#mensagem").text("");

        if (jogador1.trim().length > 0 && jogador2.trim().length > 0) {
            $("table td").text("");
            comecarJogo(jogador1, jogador2);
        } else {
            $("#mensagem").text("Falta os nomes dos jogadores!");
        }
    });
});

function comecarJogo(jogador1, jogador2) {
    var contadorJogadas = 0;
    let spanMensagem = $("#mensagem");
    $("table tr td").mouseup(function () {
        console.log(">>>>>>>>>>> " + contadorJogadas);
        if ($(this).text() == "") {
            contadorJogadas++;
            if (contadorJogadas <= 9) {
                if (contadorJogadas % 2 != 0) {
                    $(this).text("O");
                } else {
                    $(this).text("X");
                }
                switch (verificaGanhador(contadorJogadas)) {
                    case "O":
                        spanMensagem.text("O jogador " + jogador1 + " ganhou o jogo!");
                        break;
                    case "X":
                        spanMensagem.text("O jogador " + jogador2 + " ganhou o jogo!");
                        break;
                    case "V":
                        spanMensagem.text("Deu Velha!");
                        break;
                    default:
                        console.log("Relaxa que está tudo bem");
                }
            }
        }
        return false;
    });
}

function verificaGanhador(contadorJogadas) {
    let referencia = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    let x = new Array(9);
    let o = new Array(9);

    $("table td").each(function (chave, valor) {
        if ($(this).text() == "X") {
            x[chave] = chave;
        }
        if ($(this).text() == "O") {
            o[chave] = chave;
        }
    });

    for (var i = 0; i < referencia.length; i++) {
        var contadorX = 0;
        var contadorO = 0;
        for (var j = 0; j < referencia[i].length; j++) {
            if (x[referencia[i][j]] == referencia[i][j]) {
                contadorX++;
            }
            if (o[referencia[i][j]] == referencia[i][j]) {
                contadorO++;
            }
        }
        if (contadorO == 3) {
            return "O";
        } else if (contadorX == 3) {
            return "X";
        }
    }
    if (contadorJogadas == 9 && contadorO != 3 && contadorX != 3){
        return "V";
    }
}