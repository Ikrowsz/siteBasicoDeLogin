const chk = document.getElementById('checkbox')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

function logar(){
    
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "page2.html";
    }else{
        alert('Acesso Negado')
    }
} 