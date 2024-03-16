/*  
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.

2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.

3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
 
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

const userDatabase = [
    {
        username: 'andres',
        password: '123'
    },
    {
        username: 'caro',
        password: '456'
    },
    {
        username: 'mariana',
        password: '789'
    }
]

const userTimeLine = [
    {
        username: 'estefany',
        timeline: 'Me encanta Javascript'
    },
    {
        username: 'oscar',
        timeline: 'Bebeloper es lo mejor'
    },
    {
        username: 'mariana',
        timeline: 'A mime gusta mas el cafe que el te.'
    },
    {
        username: 'andres',
        timeline: 'Yo hoy no quiero trabajar.'
    }

]

const username = prompt('Ingresa tu usuario')
const password = prompt('Ingresa tu contraseña')

function usuarioExistente(username, password) {
    for(let i = 0; i < userDatabase.length; i++) {
        if (
            userDatabase[i].username === username &&
            userDatabase[i].password === password
         ) {
            return true
        }
    }
    return false
}

function signIn(username, password) {
    if(usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`)
        console.log(userTimeLine);
    } else {
        alert('Uuups, usuario o contraseña incorrectos')
    }
}

signIn(username, password)


