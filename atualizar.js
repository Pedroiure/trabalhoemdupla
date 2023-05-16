function atualizar(){
    let user = document.getElementById("atualusuario").value
    let senha = document.getElementById("atualsenha").value
    if (user == localStorage.usuario && senha == localStorage.senha) {
        alert("oi")
        localStorage.setItem('E-mail', document.getElementById.value)
        localStorage.setItem('Senha', document.getElementById.value)
    }
    
}