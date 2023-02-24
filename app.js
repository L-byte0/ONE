const entrada = document.getElementById("entrada");
const salida = document.getElementById("salida");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const limpiar = document.getElementById("limpiar");
const regex = /[a-zA-Z ]/gi;

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".btn-encriptar")) {
    encriptar();
  }

  if (e.target.matches(".btn-desencriptar")) {
    desencriptar();
  }

  if (e.target.matches(".btn-limpiar")) {
    limpiarTexto();
  }

  if (e.target.matches(".btn-copiar")) {
    copiar();
  }
});

const encriptar = () => {
  if (!regex.test(entrada.value.toLowerCase()) && !entrada.value.trim()) {
    salida.textContent = "Texto invalido";
  } else {
    const texto_encriptado = entrada.value
      .toLowerCase()
      .replaceAll(/a/gi, "ai")
      .replaceAll(/e/gi, "enter")
      .replaceAll(/i/gi, "imes")
      .replaceAll(/o/gi, "ober")
      .replaceAll(/u/gi, "ufat");

    salida.textContent = texto_encriptado;
  }
};

const desencriptar = () => {
    if (!regex.test(entrada.value.toLowerCase()) && !entrada.value.trim()) {
        salida.textContent = "Verifique su cadena de texto";
      } else {
        const texto_encriptado = entrada.value
          .toLowerCase()
          .replaceAll(/imes/gi, "i")
          .replaceAll(/ai/gi, "a")
          .replaceAll(/enter/gi, "e")
          .replaceAll(/ober/gi, "o")
          .replaceAll(/ufat/gi, "u");
    
        salida.textContent = texto_encriptado;
      }
};

const limpiarTexto = () => {
  entrada.value = "";
  salida.value = "";
}

const copiar = () => {
    const contentenido = salida.value;

    navigator.clipboard.writeText(contentenido)
        .then(() => {
        console.log("Copiado con exito")
    })
        .catch(err => {
        console.log('Algo salio mal', err);
    })
}