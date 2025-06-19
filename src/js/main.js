


function enviarFormulario(){

   
const peso = Number(document.getElementById('peso').value)
const altura = Number(document.getElementById('altura').value)
const res = document.getElementById("resultado").innerHTML = peso / (altura * altura)

let message

if( res <18.5){
  message ="Bajo de peso";
} else if (res  <= 24.9){
  message ="Peso normal";
}
else if (res >= 25 ){
  message ="Sobrepeso";
} else if (res >= 30 ){
  message ="Obesidad grado 1";
} else if (res >= 35){
  message ="Obesidad grado 2";
} else {
  message ="Obesidad grado 3";
}

res.textContent="tu tienes un imc de "+ Math.round(res) +" por lo tanto esta en: "+ message

  
            
} 