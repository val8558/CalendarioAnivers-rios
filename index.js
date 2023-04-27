
const btn = document.getElementById('submit');
let nome;
let bday;
let value
let nameTab = document.getElementById('nombre');
let bdayDate = document.getElementById('date');
let pessoas;


btn.addEventListener("click", (e) => {
    e.preventDefault();

    nome = document.getElementById('nome');
    bday = document.getElementById('bday');

    value = [nome.value, bday.value];
    ;

    console.log(value);

    localStorage.setItem('pessoas', JSON.stringify(nome.value, bday.value));

    const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];

    nameTab.innerText= nome.value;
    bdayDate.innerText = bday.value;
})


