function calcula () {
    var numeroInicio = document.getElementById("numeroInicio").value;
    var numeroFim = document.getElementById("numeroFim").value;
    var passo = document.getElementById("passo").value;
    var res = document.getElementById("res")
    numeroInicio = Number(numeroInicio)
    passo = Number(passo)
    numeroFim = Number(numeroFim)
    
    if (numeroFim==0 || numeroInicio==0 || passo==0) {
        window.alert("Preencha todos os campos")
    }

    else {    
        res.innerHTML = "Contando:<p>"
        
        // Contagem Crescente
        if (numeroInicio<numeroFim){
            while(numeroInicio<=(numeroFim-passo)) {
                numeroInicio += passo
                res.innerHTML += `${numeroInicio} 👉`
            }
        }      
        
        // Contagem Decrescente
        else if (numeroInicio>numeroFim) {
            while(numeroInicio>=(numeroFim+passo)) {
                numeroInicio -= passo
                res.innerHTML += `${numeroInicio} 👉`
            }
        }
        res.innerHTML += "🚩</P>"
    }
}