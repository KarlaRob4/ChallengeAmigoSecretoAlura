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
    if (nombre.length < 2) {
        return alert("Debe haber al menos dos amigos para realizar el sorteo.");
    } else {
            index = Math.floor(Math.random() * amigosDisponibles.length);
            let amigoAsignado = amigosDisponibles[index];
            asignacion.push({nombre: nombre, amigo: amigoAsignado});
            amigosDisponibles.splice(index, 1);
            alert("A " + nombre + " le ha tocado " + amigoAsignado);
}
}