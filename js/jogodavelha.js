$(document).ready(function () {
    $("#btn-comecar").click(function () {
        var jogador1 = $("#jogador1").val();
        var jogador2 = $("#jogador2").val();

        if (jogador1.trim().length > 0 && jogador2.trim().length > 0) {
            $("table td").text("");
            comecarJogo();
        } else {
            console.log("Não está esquecendo de nada?");
        }
    });
});

function comecarJogo() {
    let contadorJogadas = 0;

    $("table td").click(function () {
        contadorJogadas++;

        if (contadorJogadas <= 9) {
            if (contadorJogadas % 2 != 0) {
                $(this).text("O");
            } else {
                $(this).text("X");
            }
            if (verificaGanhador() == true) {
                contadorJogadas = 9;
            }
            if (contadorJogadas == 9) {
                $("#mensagem").text("O Jogo Acabou");
            }
        }
    });
}

function verificaGanhador() {
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

    $("table td").each(function(chave, valor){
        if ($(this).text() == "X"){
            x[chave] = chave;
        }
        if ($(this).text() == "O"){
            o[chave] = chave;
        }
    });

    for(var i = 0; i < referencia.length; i++){
        for(var j = 0; i <referencia[i].length; j++){
            
        }
    }
}