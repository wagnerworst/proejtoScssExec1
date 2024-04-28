import { 
    transformarBotaoEmAlertFalha,
    transformarBotaoEmAlertSucesso,
    transformarBotaoEmOriginal
} from './botoes'

export async function transformarBotaoEmAlert(idBotaoHtml, textoAlterar, tempoTextoEmTela)
{
    //Declaracao de variaveis para funcionamento
    let divBotao = document.getElementById(idBotaoHtml)

    //Altera a primeira vez o botão com o texto recebido conforme esperado de falha ou sucesso
    if( textoAlterar === "Encontrado!" || textoAlterar.split(' ')[0] > 0)
    {
        transformarBotaoEmAlertSucesso(divBotao,textoAlterar);
    }
    else
    {
        transformarBotaoEmAlertFalha(divBotao,textoAlterar);
    }
    //Após o tempo volta o texto original
    await sleep(tempoTextoEmTela)
    transformarBotaoEmOriginal(divBotao);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}