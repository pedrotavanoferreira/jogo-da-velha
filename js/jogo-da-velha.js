const jogo_da_velha ={
    canvas: ['','','','','','','','','',],
    marcacoes: {
        opcoes:['O','X'],
        indice:0

    },

    container_element: null,

    inicializar: function(container){
        this.container_element = container;
    }, 

    desenhar: function(){
        let content='';
        for(i in this.canvas){
            content += '<div onClick="jogo_da_velha.fazer_jogada(' + i + ')">' + this.canvas[i] + '</div>';

        };
        this.container_element.innerHTML = content;
    },

    iniciar_partida: function(){
        this.canvas.fill='';
        this.desenhar();
    }


};