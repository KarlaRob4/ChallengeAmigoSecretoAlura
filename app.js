let amigo = [];
let asignacion = [];

function agregarAmigo (){
    let nombre = document.getElementById("amigo").value;
    if (nombre !== ""){
        amigo.push(nombre); 
        document.getElementById("amigo").value = "";
        actualizarLista();
    }
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigo.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigo.length < 2) {
        return alert("Debe haber al menos dos amigos para realizar el sorteo.");
    } else {
        amigo.forEach(function(amigo) {
            let amigoAsignado = obtenerAmigoAleatorio(amigo);
            asignacion.push(amigoAsignado);
            console.log (amigoAsignado);
        });
    }
}

function obtenerAmigoAleatorio() {
    let amigoAsignado;  
    let indiceA = Math.floor(Math.random() * amigo.length);
    amigoAsignado = amigo[indiceA];
    return amigoAsignado;
}
