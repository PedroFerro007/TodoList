const title = document.querySelector('.clock');
const date = new Date();

title.innerHTML = date.toLocaleString('pt-BR', {
    dateStyle: 'full'
});