

function enviarFormulario(){
            
    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)

  if(!peso || !altura) return alert("Es necario colocar todos los valores")

  const res = document.getElementById("resultado").innerHTML = peso / (altura * altura)
            
  } 