function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.menu__lista')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

//script criado para fazer um pequeno menu lateral quando acessar pelo mobile