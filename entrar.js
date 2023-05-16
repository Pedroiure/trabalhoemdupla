const emaillog = document.getElementById("emaillog")
const senhalog = document.getElementById("senhalog")
entrar.addEventListener("click", () => {
    let email1 = emaillog.value
    let senha1 = senhalog.value
    for(let i=0, len = localStorage.length; i < len; i++){
        let key = localStorage.key(i)
        let valor = localStorage.getItem(key)
        if(email1 == key && senha1 == valor){
            var confirmar = 1;
        }
    }
    if(confirmar == 1){
        alert("Login Efetuado")
    }
    else{
        alert("Informações não encontradas")
    }
})