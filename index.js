
const btn = document.getElementById('submit');
let nome;
let bday;
let value
let nameTab = document.getElementById('nombre');
let bdayDate = document.getElementById('date');


btn.addEventListener("click", (e) => {
    e.preventDefault();

    nome = document.getElementById('nome');
    bday = document.getElementById('bday');

    value = [nome.value, bday.value];
    ;

    console.log(value);

    nameTab.innerText= nome.value;
    bdayDate.innerText = bday.value;
})


