function clicou() {
    const button = document.querySelector('.botao');

/*
    if(button.classList.contains('azul')) {
        button.classList.remove('azul');
        button.classList.add('verde');
    } else {
        button.classList.add('azul');
        button.classList.remove('verde');
    }

    button.classList.toggle('azul');
*/

    button.classList.replace('azul', 'verde');

    console.log(button.classList);

}


