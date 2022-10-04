const caixa = document.getElementById("container")

//exercicio 1
// function adicionaItem (event) {
//     const novoItem = document.createElement("article");
//     caixa.appendChild(novoItem)
//     novoItem.innerHTML = "teste"
// }


//exercicio 2
function adicionaItem (event) {
    const novoItem = document.createElement("article");
    caixa.appendChild(novoItem)
    //adicionar classe
    novoItem.classList.add("item")
    // novoItem.addEventListener('click', (event) => removeItem(event))
    novoItem.onclick = (event) => removeItem(event)
}

//exercicio 3
function removeItem (event) {
    const item = event.target
    item.remove()
}