/* =========================================
   BRINCADEIRA
========================================= */

function mostrarBrincadeira() {

    document.getElementById("brincadeira").style.display = "block";

    document.getElementById("etapa2").style.display = "block";

    document.getElementById("etapa3").style.display = "none";

    document.getElementById("etapa4").style.display = "none";

}


/* =========================================
   PRÓXIMA ETAPA
========================================= */

function proximaEtapa() {

    document.getElementById("etapa2").style.display = "none";

    document.getElementById("etapa3").style.display = "block";

}


/* =========================================
   ÚLTIMA ETAPA
========================================= */

function ultimaEtapa() {

    document.getElementById("etapa3").style.display = "none";

    document.getElementById("etapa4").style.display = "block";

}


/* =========================================
   BOTÃO "NÃO" FOGE
========================================= */

function fugir(botao) {

    const largura =
        window.innerWidth -
        botao.offsetWidth -
        20;

    const altura =
        window.innerHeight -
        botao.offsetHeight -
        20;

    const x =
        Math.random() * largura;

    const y =
        Math.random() * altura;

    botao.style.position = "fixed";

    botao.style.left = x + "px";

    botao.style.top = y + "px";

}


/* =========================================
   ENTRAR NO SITE
========================================= */

function entrar() {

    /*
        ESCONDE A TELA INICIAL
    */

    document.getElementById("login").style.display = "none";


    /*
        MOSTRA O SITE
    */

    document.getElementById("principal").style.display = "flex";


    /* =====================================
       MÚSICA
    ====================================== */

    const musica =
        document.getElementById("musica");

    musica.currentTime = 0;

    musica.play().catch(function () {

        console.log(
            "O navegador bloqueou o áudio."
        );

    });


    /* =====================================
       INICIA FOTOS
    ====================================== */

    iniciarFotos();


    /* =====================================
       CORAÇÕES SUBINDO
    ====================================== */

    criarCoracoes();


    /* =====================================
       EXPLOSÃO INICIAL
    ====================================== */

    explosaoCoracoes(
        window.innerWidth / 2,
        window.innerHeight / 2,
        50
    );


    /* =====================================
       EXPLOSÕES AUTOMÁTICAS
    ====================================== */

    iniciarExplosoesAutomaticas();


    /* =====================================
       MENSAGEM INICIAL
    ====================================== */

    mostrarMensagem();

}


/* =========================================
   FOTOS
========================================= */

/*
    TODAS AS SUAS 8 FOTOS
*/

const fotos = [

    "imagens/foto1.jpg",

    "imagens/foto2.jpg",

    "imagens/foto3.jpg",

    "imagens/foto4.jpg",

    "imagens/foto5.jpg",

    "imagens/foto6.jpg",

    "imagens/foto7.jpg",

    "imagens/foto8.jpg"

];


let fotoAtual = 0;


/* =========================================
   INICIAR CARROSSEL
========================================= */

function iniciarFotos() {

    const imagem =
        document.getElementById(
            "fotoSlideshow"
        );


    /*
        COMEÇA NA PRIMEIRA FOTO
    */

    fotoAtual = 0;

    imagem.src =
        fotos[fotoAtual];

    imagem.classList.remove(
        "trocando"
    );


    /*
        TROCA A FOTO
        A CADA 4 SEGUNDOS
    */

    const intervalo =
        setInterval(function () {


            /*
                FADE OUT
            */

            imagem.classList.add(
                "trocando"
            );


            setTimeout(function () {


                /*
                    VAI PARA A PRÓXIMA
                */

                fotoAtual++;


                /*
                    TERMINARAM AS FOTOS
                */

                if (
                    fotoAtual >=
                    fotos.length
                ) {


                    /*
                        PARA O INTERVALO
                    */

                    clearInterval(
                        intervalo
                    );


                    /*
                        MOSTRA O VÍDEO
                    */

                    mostrarVideo();


                    return;

                }


                /*
                    TROCA A IMAGEM
                */

                imagem.src =
                    fotos[
                    fotoAtual
                    ];


                /*
                    QUANDO A NOVA FOTO
                    CARREGAR
                */

                imagem.onload =
                    function () {

                        imagem.classList.remove(
                            "trocando"
                        );

                    };


            }, 800);


        }, 3500);

}


/* =========================================
   MOSTRAR VÍDEO
========================================= */

function mostrarVideo() {

    const area =
        document.getElementById(
            "areaMidia"
        );


    const videoContainer =
        document.getElementById(
            "videoFinalContainer"
        );


    const video =
        document.getElementById(
            "videoFinal"
        );


    /*
        ESCONDE AS FOTOS
    */

    area.style.display =
        "none";


    /*
        MOSTRA O VÍDEO
    */

    videoContainer.style.display =
        "flex";


    /*
        COMEÇA O VÍDEO DO ZERO
    */

    video.currentTime = 0;


    /*
        QUANDO O VÍDEO TERMINAR
    */

    video.onended =
        function () {

            voltarParaFotos();

        };


    /*
        INICIA O VÍDEO
    */

    video.play().catch(function () {

        console.log(
            "O navegador bloqueou o vídeo."
        );

    });

}


/* =========================================
   VOLTAR PARA AS FOTOS
========================================= */

function voltarParaFotos() {

    const area =
        document.getElementById(
            "areaMidia"
        );


    const videoContainer =
        document.getElementById(
            "videoFinalContainer"
        );


    const imagem =
        document.getElementById(
            "fotoSlideshow"
        );


    const video =
        document.getElementById(
            "videoFinal"
        );


    /*
        PARA O VÍDEO
    */

    video.pause();


    /*
        ESCONDE O VÍDEO
    */

    videoContainer.style.display =
        "none";


    /*
        MOSTRA AS FOTOS
    */

    area.style.display =
        "flex";


    /*
        VOLTA PARA A PRIMEIRA FOTO
    */

    fotoAtual = 0;

    imagem.src =
        fotos[fotoAtual];

    imagem.classList.remove(
        "trocando"
    );


    /*
        EXPLOSÃO AO VOLTAR
        PARA AS FOTOS
    */

    explosaoCoracoes(
        window.innerWidth / 2,
        window.innerHeight / 2,
        25
    );


    /*
        COMEÇA UM NOVO CARROSSEL
    */

    setTimeout(function () {

        iniciarFotos();

    }, 500);

}


/* =========================================
   MENSAGEM INICIAL
========================================= */

function mostrarMensagem() {

    const mensagem =
        document.getElementById(
            "mensagemInicial"
        );


    /*
        ESPERA 5 SEGUNDOS
    */

    setTimeout(function () {


        mensagem.style.transition =
            "opacity 1s ease";


        mensagem.style.opacity =
            "0";


        /*
            REMOVE A MENSAGEM
        */

        setTimeout(function () {

            mensagem.style.display =
                "none";

        }, 1000);


    }, 5000);

}


/* =========================================
   CORAÇÕES SUBINDO
========================================= */

function criarCoracoes() {

    const tela =
        document.getElementById(
            "coracoes"
        );


    /*
        CRIA UM CORAÇÃO
        A CADA 250 MILISSEGUNDOS
    */

    setInterval(function () {


        const coracao =
            document.createElement(
                "div"
            );


        coracao.classList.add(
            "coracao"
        );


        /*
            TIPOS DE CORAÇÃO
        */

        const tipos = [

            "❤️",

            "💕",

            "💖",

            "💗",

            "💓",

            "💘",

            "💝"

        ];


        /*
            ESCOLHE UM ALEATORIAMENTE
        */

        coracao.innerHTML =
            tipos[
            Math.floor(
                Math.random() *
                tipos.length
            )
            ];


        /*
            POSIÇÃO HORIZONTAL ALEATÓRIA
        */

        coracao.style.left =
            Math.random() *
            100 +
            "%";


        /*
            TAMANHO ALEATÓRIO
        */

        coracao.style.fontSize =
            (
                20 +
                Math.random() *
                35
            ) +
            "px";


        /*
            VELOCIDADE ALEATÓRIA
        */

        coracao.style.animationDuration =
            (
                4 +
                Math.random() *
                4
            ) +
            "s";


        /*
            COLOCA NA TELA
        */

        tela.appendChild(
            coracao
        );


        /*
            REMOVE DEPOIS
        */

        setTimeout(function () {

            coracao.remove();

        }, 9000);


    }, 250);

}


/* =========================================
   EXPLOSÃO DE CORAÇÕES
========================================= */

function explosaoCoracoes(
    posX,
    posY,
    quantidade = 40
) {


    /*
        TIPOS DE CORAÇÃO
    */

    const tipos = [

        "❤️",

        "💕",

        "💖",

        "💗",

        "💓",

        "💘",

        "💝"

    ];


    /*
        CRIA VÁRIOS CORAÇÕES
    */

    for (
        let i = 0;
        i < quantidade;
        i++
    ) {


        const coracao =
            document.createElement(
                "div"
            );


        coracao.classList.add(
            "coracao-explosao"
        );


        /*
            ESCOLHE CORAÇÃO
        */

        coracao.innerHTML =
            tipos[
            Math.floor(
                Math.random() *
                tipos.length
            )
            ];


        /*
            POSIÇÃO INICIAL
        */

        coracao.style.left =
            posX + "px";

        coracao.style.top =
            posY + "px";


        /*
            DIREÇÃO ALEATÓRIA
        */

        const angulo =
            Math.random() *
            Math.PI *
            2;


        /*
            DISTÂNCIA ALEATÓRIA
        */

        const distancia =
            100 +
            Math.random() *
            450;


        /*
            MOVIMENTO HORIZONTAL
        */

        const x =
            Math.cos(
                angulo
            ) *
            distancia;


        /*
            MOVIMENTO VERTICAL
        */

        const y =
            Math.sin(
                angulo
            ) *
            distancia;


        /*
            ENVIA PARA O CSS
        */

        coracao.style.setProperty(
            "--x",
            x + "px"
        );


        coracao.style.setProperty(
            "--y",
            y + "px"
        );


        /*
            TAMANHO ALEATÓRIO
        */

        coracao.style.fontSize =
            (
                20 +
                Math.random() *
                35
            ) +
            "px";


        /*
            COLOCA NA PÁGINA
        */

        document.body.appendChild(
            coracao
        );


        /*
            REMOVE DEPOIS DA ANIMAÇÃO
        */

        setTimeout(function () {

            coracao.remove();

        }, 1800);

    }

}


/* =========================================
   EXPLOSÕES AUTOMÁTICAS
========================================= */

function iniciarExplosoesAutomaticas() {


    /*
        UMA EXPLOSÃO A CADA 3 SEGUNDOS
    */

    setInterval(function () {


        /*
            MARGEM PARA NÃO EXPLODIR
            COLADO NAS BORDAS
        */

        const margem = 100;


        /*
            POSIÇÃO X ALEATÓRIA
        */

        const x =
            margem +
            Math.random() *
            (
                window.innerWidth -
                margem * 2
            );


        /*
            POSIÇÃO Y ALEATÓRIA
        */

        const y =
            margem +
            Math.random() *
            (
                window.innerHeight -
                margem * 2
            );


        /*
            CRIA EXPLOSÃO
        */

        explosaoCoracoes(
            x,
            y,
            15
        );


    }, 2000);

}


/* =========================================
   EXPLOSÃO AO CLICAR
========================================= */

document.addEventListener(
    "click",
    function (evento) {


        /*
            VERIFICA SE O SITE PRINCIPAL
            ESTÁ ABERTO
        */

        if (
            document.getElementById(
                "principal"
            ).style.display !== "flex"
        ) {

            return;

        }


        /*
            EXPLODE NO LOCAL DO CLIQUE
        */

        explosaoCoracoes(
            evento.clientX,
            evento.clientY,
            20
        );

    }
);