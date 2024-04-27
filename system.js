export async function transformarBotaoEmAlert(idBotaoHtml, textoAlterar, tempoTextoEmTela)
{
    //Declaracao de variaveis para funcionamento
    let divBotao = document.getElementById(idBotaoHtml)
    let valorAnteriorBotao = document.getElementById(idBotaoHtml).value

    //Altera a primeira vez o botão com o texto recebido
    divBotao.innerText = textoAlterar;
    //Após o tempo volta o texto original
    await sleep(tempoTextoEmTela)
    divBotao.innerText = valorAnteriorBotao;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
