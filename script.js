var nome = document.getElementById("txtpa")
var tab = document.getElementById("gpalv")
var resposta = document.getElementById("h1")
var caixapa = []


function guardarpalavras() {

    if( nome.value.length == 0 ){

        alert("OPS! [ERRO] Nenhum nome encontrado!Digite os nomes desejado!")

    }else{

    var armnomes = document.createElement("option")

    armnomes.text = nome.value

    tab.appendChild( armnomes )
    
    console.log( nome.value )

    caixapa.push(nome.value)

    console.log(caixapa)
        
    }
 
}

function limpar() {

    nome.value = ""
    tab.innerHTML = ""
    tab.size = "15"
    var ini = document.createElement("option")
    ini.text = "Palavras Guardadas:"
    
    caixapa = []
    resposta.innerHTML = ""
    tab.appendChild(ini)

    console.log("LIMPOU!!!")
}

function sortear() {

 if( caixapa.length == 0 ){

    alert("[ERRO] Digite os nomes desejado!!!")

    

 }else if( caixapa.length < 2 ){

        alert("[ERRO] Digite mais nomes para realizar o sorteio!!!")

    }else {

    var sorteio = Math.floor(Math.random()*caixapa.length)

    resposta.innerHTML = ( caixapa[sorteio].toUpperCase() )
    
    console.log( sorteio + " " + caixapa[sorteio] )

}   
}