
var nome = document.getElementById("nome");
var tel  = document.getElementById("tel");
var email = document.getElementById("email");

div = document.getElementById("btnEnviar")
div.addEventListener("click", ()=>{ 

    console.log(nome.value);
    console.log(tel.value);
    console.log(email.value);

})

