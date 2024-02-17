/* Funcionamiento de la Licuadora */


var estadoLicuadora = "apagado";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    soundLicuadora();
    licuadora.classList.toggle('active');
  }
  else {
    estadoLicuadora = "apagado";
    soundLicuadora();
    licuadora.classList.remove('active');
  }
}

function soundLicuadora() {
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}