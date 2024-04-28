export function transformarBotaoEmAlertFalha(divBotao,textoAlterar){
    divBotao.innerText = textoAlterar;
    divBotao.style.backgroundColor = "#c04e4e"
}

export function transformarBotaoEmAlertSucesso(divBotao,textoAlterar){
    divBotao.innerText = textoAlterar;
    divBotao.style.backgroundColor = "#8FBCB3"
}

export function transformarBotaoEmOriginal(divBotaoVoltar){
    divBotaoVoltar.innerText = "RESULTADO";
    divBotaoVoltar.style.backgroundColor = "#FCE6A8";
}
