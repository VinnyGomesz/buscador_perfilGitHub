var input = document.querySelector('#input')
var fotoPerfil = document.querySelector('#foto')
var perfil = () => {
    
    axios.get(`https://api.github.com/users/${input.value}`)
    .then(response => {
        input.style.marginLeft = '-14rem'
        foto.setAttribute('src', response.data.avatar_url)
            
    
   console.log(response);
    })
    .catch(() => {
        alert(`Usuário não encontrado`)
    })
}
