const animais = ["MACACO", "GIRAFA", "CAVALO", "CACHORRO", "GALINHA", "TUCANO", "CROCODILO"];

const palavraSecreta =
  animais[Math.floor(Math.random() * animais.length)] 


//Evento adicionar palavra//

 

 //===============================================//
const letrasErradas = [];
const letrasCorretas = [];

document.querySelector(".fake-input").value = "";


document.querySelector("html").addEventListener("click", () => {
  document.querySelector(".fake-input").focus();
  
  
});



document.addEventListener("keydown", (evento) => {
  const codigo = evento.keyCode; // 65 - 90 (intervalo)
  if (isLetra(codigo)) {
    const letra = evento.key.toUpperCase();
    if (letrasErradas.includes(letra)) {
      mostrarAvisoLetraRepetida();
    } else {
      if (palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra);
      } else {
        letrasErradas.push(letra);
      }
    }
    atualizarJogo();
  }
});

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo();
}

function mostrarLetrasErradas() {
  const div = document.querySelector(".letras-erradas-container");
  div.innerHTML = "";
  letrasErradas.forEach((letra) => {
    div.innerHTML += `<span>${letra}</span>`;
  });
}

function mostrarLetrasCertas() {
  const container = document.querySelector(".palavra-secreta-container");
  container.innerHTML = "";
  palavraSecreta.split("").forEach((letra) => {
    
    if (letrasCorretas.includes(letra)) {
      container.innerHTML += `<span>${letra}</span>`;
    } else {
      container.innerHTML += `<span>__</span>`;
    }
  });
}

function checarJogo() {
  let mensagem = "";
  const container = document.querySelector(".palavra-secreta-container");
  const partesCorpo = document.querySelectorAll(".forca-parte");

  if (letrasErradas.length === partesCorpo.length) {
    mensagem = "Fim de jogo!<br> Você perdeu!<br> &#x1F480";
  }

  if (palavraSecreta === container.innerText) {
    mensagem = "Parabéns!<br> Você ganhou!<br> &#x1F60E	";
  }

  if (mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
    document.querySelector(".popup-container").style.display = "flex";
  }
}

function desenharForca() {
  const partesCorpo = document.querySelectorAll(".forca-parte");
  for (let i = 0; i < letrasErradas.length; i++) {
    partesCorpo[i].style.display = "block";
  }
}

function mostrarAvisoLetraRepetida() {
  const aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 2000);
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90;
  
}

function reiniciarJogo() {
  window.location.reload();
  
}