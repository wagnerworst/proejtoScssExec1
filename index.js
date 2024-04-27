require("./index.scss")
import { transformarBotaoEmAlert } from './system'

document.getElementById("buttonEncontrar").addEventListener("click",executarEcontrar)
document.getElementById("buttonFiltrar").addEventListener("click",executarFiltrar)

function executarEcontrar()
{
    let listaFind = document.getElementById("listaFind").value
    let elemento = document.getElementById("elementoFind").value
    let arrayFind = listaFind.split(",")
    let resultadoFind = arrayFind.find((element) => element === elemento) > 0 ? "Encontrado" : "Não Encontrado";

    transformarBotaoEmAlert("buttonResultadoEncontrar",resultadoFind, 3000)
}

function executarFiltrar()
{
    let listaFilter = document.getElementById("listaFilter").value
    let elemento = document.getElementById("elementoFilter").value
    let arrayFilter = listaFilter.split(",")
    let arrayFiltrado = arrayFilter.filter((element) => element === elemento)
    
    transformarBotaoEmAlert("buttonResultadoFiltrar",`${arrayFiltrado.length} Encontrados`, 3000)
}