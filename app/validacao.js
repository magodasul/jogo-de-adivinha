function verificaSeChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForValido (numero)) {
        elementoChute.innerHTML +='<div>Valor Invalido</div>'
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML +=`<div>Valor Invalido: Fale um numero entre${menorValor} e ${maiorValor}</div>`
        return
    }
    if (numero=== numeroSecreto) {
        document.body.innerHTML =`
            <h2>Voce acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button id=”jogar-novamente” class=”btn-jogar”>Jogar novamente</button>`

    }else if (numero>numeroSecreto) {
    	    elementoChute.innerHTML +=`<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i></div>`

    }else {
        elementoChute.innerHTML +=`<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-down-from-bracket"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return numer.isNaN(numero)
}
document.body.addEventListener('click', e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload()
    }
})
