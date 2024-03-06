
// mostrarNombre(let=nombre="")=>nombre=prompt("dime tu nombre",undefined,"anonimo");

 // Función para cambiar el nombre
 function cambiarNombre() {
    // Preguntar por el nombre usando prompt
    let nombre = prompt("¿Cuál es tu nombre?");
    
    // Verificar si se ingresó un nombre
    if (nombre) {
      // Actualizar el texto con el nuevo nombre
      document.getElementById("saludo").textContent = "Hola " + nombre;
    }
  }

  document.getElementById("cambiarNombre").addEventListener("click", cambiarNombre);
  