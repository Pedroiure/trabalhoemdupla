const salvar = document.getElementById("salvar")
const entrar = document.getElementById("entrar")
const email = document.getElementById("email")
const senha = document.getElementById("senha")

salvar.addEventListener("click", () => {
    let confirmarsenha = document.getElementById("confsenha")
    let email1 = email.value
    let senha1 = senha.value
    let senha2 = confirmarsenha.value
    if (senha1 == senha2){
        alert("Cadastro Concluído. Volte para o ínicio para acessar sua conta")
        localStorage.setItem(email1, senha1)
    }else(
        alert("Informações Incoerentes")
    )
})
