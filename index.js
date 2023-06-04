// Obtener elementos del DOM
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const section = document.querySelector("section");

// Manejar el evento de enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(this);
  // Obtener los valores de los input
  const name = nameInput.value;
  const email = emailInput.value;

  // Obtener la lista de usuarios (array) guardada en local storage
  let userList = localStorage.getItem("userList");
  userList = userList ? JSON.parse(userList) : [];
  //console.log(this)

  // Agregar nuevo usuario a la lista
  const newUser = { name, email };
  userList.push(newUser);

  // guardar lista actualizada en el local storage
  localStorage.setItem("userList", JSON.stringify(userList));

  //Mostrar la lista de usuarios en la selección
  showUserList();
});
// Función para mostrar el nombre guardado en localStorage
function showUserList() {
  const userList = localStorage.getItem("userList");

  if (userList) {
    const users = JSON.parse(userList);

    if (users.length > 0) {
      const userListHTML = users.map((user, index) => {
          return (
          `<div>
	           <p>Nombre: ${user.name}</p>
	           <p>Correo electrónico: ${user.email}</p>
	         </div>`
       )}) .join("");

      section.innerHTML = userListHTML;
    } else {
      section.innerHTML = `<p>No hay usuarios registrados.</p>`;
    }
  } else {
    section.innerHTML = `<p>No hay usuarios registrados.</p>`;
  }
}
// Función para borrar el nombre guardado en localStorage
function deleteName() {
  localStorage.removeItem("name");
  section.textContent = "No hay datos guardados";
}

//Crear el boton de eliminar datos

function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Borrar";
  deleteButton.addEventListener("click", deleteName);
  section.appendChild(deleteButton);
} 
// Mostrar el nombre guardado al cargar la página
showUserList();
