const ligar = () =>{
    let lampada = document.getElementById("lampada");

    // lampada.src="img/acesa.jpg";

    if(lampada.src.includes("apagada.jpg"))
        lampada.src = "img/acesa.jpg"
    else lampada.src = "img/apagada.jpg"
};