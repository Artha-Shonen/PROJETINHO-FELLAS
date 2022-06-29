function validarform(){
    let nome =document.getElementById("nome-completo")
    let email = document.getElementById("emailcompleto")
    let telefone =document.getElementById("telefone")

    if(nome.value==""){
        alert("O campo nome está vazio")
        nome.focus()
    }
    if(email.value==""){
        alert("O campo email está vazio")
    }
    if(telefone.value=="" || telefone.length<8){
        alert("O campo telefone está vazio")
    }
    if(telefone.value==""){
        alert("Digite um numero válido!")
    }
    if(estado.value==""){
        alert("Digite um estado")
    }
    if(cidade.value==""){
        alert("Digite uma cidade")
    }
    if(motivo.value==""){
        alert("Informe o motivo")
    }
    if(caixatexto.value==""){
        alert("Digite a mensagem")
    }
}