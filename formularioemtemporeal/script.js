const input = document.getElementById("textinput")
const resultado = document.getElementById("result")

input.addEventListener("input", () => {
    const texto = input.value

    resultado.textContent = texto

    if (texto.length > 10) {
        resultado.style.color = "red"
    } else {
        resultado.style.color = "black"
    }
})