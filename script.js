const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img")
let prevalue

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim() //trim() remove os espaços em branco de uma string, tanto no começo quanto no final.
    if(!qrValue || prevalue === qrValue) return // Se o campo estiver vazio, não irá gerar o QR Code
    prevalue = qrValue
    generateBtn.innerText = "Gerando o QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active")
        generateBtn.innerText = "Gerando o QR Code..."
    })
})

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active")
        prevalue = ""
    }
})