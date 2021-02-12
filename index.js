// //GET

// fetch('https://601da02bbe5f340017a19d60.mockapi.io/users')
// .then(res => res.json())
// .then(data => {
//     // puedo leer la info que recibi
//     console.log(data)
// })

// //POST
// // sirve para crear ionformacion
// // headers
// // body
// // JSON ---> JavaScript Object Notation

// fetch('https://601da02bbe5f340017a19d60.mockapi.io/users', {
//     method: 'post',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         address: "calle falsa 123",
//         nombre: "Sol", 
//         apellido: "Santopietro"
//     })
// })


// // DELETE

// // Permite eliminar informacion de una API
// // GENERALMENTE sera la ruta de la coleccion donde esta esa info /id del elemento 

// fetch('https://601da02bbe5f340017a19d60.mockapi.io/users/113', {
//     method: 'delete',
//     // headers: {} (a veces, algunas apis piden headers para metodo delete. Esta no.)
// })
// .then(res => res.json())
// .then(data => {
//   console.log(data)
// })

// // PUT 
// // PATCH --> se usa poco 

// // Sirven para modificar informacion
// // EN TEORIA el PUT recibe la informacion COMPLETA de un recurso que ya existe en la API
// // y el PATCH recibe informacion PARCIAL de un recurso que ya existe en la API. 
// // Envian como respuesta el nuevo objeto con las modificaciones realizadas

// //PUT

// fetch('https://601da02bbe5f340017a19d60.mockapi.io/users', {
//     method: 'put',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         address: 'calle falsa 123',
//         email: 'sol.santopietro@gmail.com',
//         fullname: 'sol santopietro', 
//         phone: '432564632'
//     })
// })

// //PATCH

// fetch('https://601da02bbe5f340017a19d60.mockapi.io/users', {
//     method: 'patch',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         fullname: 'bla bla bla', 
//     })
// })

const borrarUser = (nroUser) => {
fetch(`https://601da02bbe5f340017a19d60.mockapi.io/users/${nroUser}`, {
    method: 'delete',
    // headers: {} (a veces, algunas apis piden headers para metodo delete. Esta no.)
})
.then(res => res.json())
.then(data => {
  console.log(data)
})
}


fetch('https://601da02bbe5f340017a19d60.mockapi.io/users')
.then(res => res.json())
.then(data => {
    console.log(data)
    const listaDeUsers = document.querySelector("ul")

    console.log(listaDeUsers)

    data.map((user) => {
        console.log(user)
        listaDeUsers.innerHTML += `
        <li>${user.fullname}<button onclick="eliminar(${user.id})" class="eliminar">Eliminar user</button></li>
        `
    })

    const botonParaEliminar = document.querySelector(".eliminar")
    console.log(botonParaEliminar)

    eliminar = (id) => {
        // console.log("eliminar a:", user.fullname, "con el id:",user.id )
        borrarUser(id)
    }
})

