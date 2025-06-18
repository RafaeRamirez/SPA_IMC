const peso = Number(document.getElementById('peso').value)
const altura = Number(document.getElementById('altura').value)
function enviarFormulario(){

    let message
const res = document.getElementById("resultado").innerHTML = peso / (altura * altura)

  if(!peso || !altura) return alert("Es necario colocar todos los valores")
    if( res <18.5){
            message ="Bajo de peso";
    }


  
            
  } 