import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

const campoPreco = document.getElementById('preco');

const configuracao = {
  prefix: 'R$ ',
  suffix: '',
  fixed: true,
  fractionDigits: 2,
  decimalSeparator: ',',
  thousandsSeparator: '.',
  cursor: 'end'
};

SimpleMaskMoney.setMask(campoPreco, configuracao);