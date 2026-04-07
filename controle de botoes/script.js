let valor = 0

const resultado = document.getElementById("result")
const btnSoma = document.getElementById("btn-soma")
const btnSubtracao = document.getElementById("btn-subtracao")

btnSoma.addEventListener("click", () => {
    valor++
    resultado.textContent = valor
})

btnSubtracao.addEventListener("click", () => {
    valor--
    resultado.textContent = valor
})