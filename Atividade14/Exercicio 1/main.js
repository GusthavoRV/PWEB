let inputName = document.getElementById("campoNome")
let inputEmail = document.getElementById("email")
let inputComent = document.getElementById("coment")
let inputSubmit = document.getElementById("submit")
let inputRadio1 = document.getElementById("radio1")
let inputRadio2 = document.getElementById("radio2")
let inputClear = document.getElementById("clear")

const validaNome = () => {
    if(inputName.value.length < 10){
        alert('O nome não pode ser menor que 10 caracteres!');
        inputName.value = '';
    }
}

const validaComentario = () => {
    if(inputComent.value.length < 20){
        alert('O campo "Comentario" não pode ter menos que 20 caracteres!')
        inputComent.value = '';
        inputComent.focus();
    }
}

const validaSubmit = () => {
    if(inputRadio1.checked){
        alert("Volte sempre à está página")
    }
    if(inputRadio2.checked){
        alert("Que bom que vocêvoltou a visitar esta página!")
    }
}

const clearall = () => {
    inputName.value = '';
    inputComent.value = '';
    inputEmail.value = '';
}