const input = document.querySelector('.login-input');
const button = document.querySelector('.button-login');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    if (target.value.length > 3){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');

}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('jogador', input.value);
    window.location = 'pages/jogo.html';
}


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
