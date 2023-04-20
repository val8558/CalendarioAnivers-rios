const tableContainer = document.getElementsByClassName('table')


const dados = [
    {
        name: "joao",
        date: "01/02/03"
    }
]

window.onload = function() {
    dados.forEach(dados => addtable(dados))
}

function addtable (){

    const {name, date} = dados
    
    const pName = document.createElement('div')
    pName.classList.add('personName')
    tableContainer.appendChild(pName)

    const pDate = document.createElement('div')
    pDate.classList.add('personDate')
    tableContainer.appendChild(pDate)
}


