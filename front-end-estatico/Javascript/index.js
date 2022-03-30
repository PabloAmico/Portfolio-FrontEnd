function cambiar_parrafo(){
    document.getElementById("cont-Atencion").style.display = "block";
    document.getElementById("tiempo-Atencion").style.display = "block";
}

function cambiar_lugar_trabajo(){
    document.getElementById("Atencion-al-publico").style.display = "block";
    let texto = document.getElementById("cont-Atencion").innerText;
    console.log(texto);
}

function cambiar_antiguedad(){
    document.getElementById("Antiguedad").style.display = "block";
    let texto = document.getElementById("tiempo-atencion").innerText;
}

function myFunction1(valor){
    document.getElementById("Tiempo").innerText = valor;
}

function myFunction2(valor){
    document.getElementById("Lugar-Trabajo").innerText = valor;
}