const quadrado = document.getElementById("quadrado")

// estado inicial
const textoInicial = "Passe o mouse"
const corInicial = "gray"

// mouse entra no quadrado
quadrado.addEventListener("mouseover", () => {
    quadrado.textContent = "Brasil"
    quadrado.style.backgroundColor = "green"
})

// mouse se move dentro
quadrado.addEventListener("mousemove", () => {
    quadrado.textContent = "Alemanha"
    quadrado.style.backgroundColor = "black"
})

// clique
quadrado.addEventListener("click", () => {
    quadrado.textContent = "Argentina"
    quadrado.style.backgroundColor = "lightblue"
})

// duplo clique
quadrado.addEventListener("dblclick", () => {
    quadrado.textContent = "Itália"
    quadrado.style.backgroundColor = "red"
})

// quando o mouse sai → volta ao normal
quadrado.addEventListener("mouseout", () => {
    quadrado.textContent = textoInicial
    quadrado.style.backgroundColor = corInicial
})