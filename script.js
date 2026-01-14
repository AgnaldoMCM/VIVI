// =========================
// script.js
// =========================


const btnSim = document.getElementById('btnSim');
const btnNao = document.querySelector('.nao');
const confirmacao = document.getElementById('confirmacao');
const btnConfirmar = document.getElementById('btnConfirmar');
const textoConfirmacao = document.getElementById('textoConfirmacao');
const inicio = document.getElementById('inicio');
const final = document.getElementById('final');


const perguntas = [
'Tem certeza do que está escolhendo?',
'Certeza mesmo? É um compromisso sério.',
'Absoluta certeza? Com respeito e propósito.',
'Pensou direitinho, com Deus no centro?',
'Mesmo sabendo que é com paciência?',
'Última chance de fugir 👀',
'Então vamos juntos, de verdade 🙏'
];


let etapa = 0;
let escala = 1;


// Botão NÃO fugir do mouse
btnNao.addEventListener('mouseenter', () => {
const maxX = window.innerWidth - btnNao.offsetWidth;
const maxY = window.innerHeight - btnNao.offsetHeight;


const x = Math.random() * maxX;
const y = Math.random() * maxY;


btnNao.style.position = 'fixed';
btnNao.style.left = `${x}px`;
btnNao.style.top = `${y}px`;
});


btnSim.addEventListener('click', () => {
confirmacao.style.display = 'flex';
confirmacao.style.flexDirection = 'column';
confirmacao.style.alignItems = 'center';
});


btnConfirmar.addEventListener('click', () => {
if (etapa < perguntas.length) {
textoConfirmacao.innerText = perguntas[etapa];
etapa++;


escala += 0.12;
btnConfirmar.style.transform = `scale(${escala})`;
} else {
btnConfirmar.style.position = 'fixed';
btnConfirmar.style.top = '50%';
btnConfirmar.style.left = '50%';
btnConfirmar.style.transform = 'translate(-50%, -50%) scale(25)';


setTimeout(() => {
inicio.style.opacity = '0';
setTimeout(() => {
inicio.style.display = 'none';
final.style.display = 'block';
final.style.animation = 'fadeInUp 1s ease forwards';
}, 500);
}, 700);
}
});
