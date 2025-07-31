const users = [];

function addUser(name) {
    users.push(name);
    console.log(`${name} agregado a la lista de usuarios.`);
}

function removeUser(name) {
    const index = users.indexOf(name); // La función indexOf devuelve al posicion del elemento si no lo encuentra devuelve -1.
    if (index !== -1) { // Si indexOf encontro el elemento se elimina una casilla.
        users.splice(index, 1); // Se elimina una casilla apartir del index en el que se encontro el elemento.
        console.log(`Usuario eliminado: ${name}`);
    }
    else {
        console.log(`Usuario no encontrado: ${name}`);
    }
}

function listUsers() {
    console.log("Lista de usuarios: \n");
    users.forEach((user, i) => console.log(`${i + 1}. ${user}`));
}

module.exports = {
    addUser,
    removeUser,
    listUsers
}