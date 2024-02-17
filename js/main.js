/* Funcionamiento de la Licuadora */


var estadoLicuadora = "apagado";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    sonidoOnOff();
    licuadora.classList.add('active');
  } else {
    estadoLicuadora = "apagado";
    sonidoOnOff();
    licuadora.classList.remove('active');
  }
}

function sonidoOnOff() {
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}