export const errorsFirebase = (error) => { //error de firebase - error.code
    switch (error.code) {
        case "auth/email-already-in-use": 
            return{
                code: 'email',
                message: "Usuario ya registrado",
            }
        case "auth/invalid-email":
            return{
                code: 'email',
                message: "Formato email no válido",
            }
        case "auth/wrong-password":
            return{
                code: 'password',
                message: "Contraseña incorrecta",
            }
        case "auth/user-not-found":
            return{
                code: 'email',
                message: "Usuario no registrado",
            }
        default:
            return{
                code: 'email',
                message: "Ocurrio un error en server",
            }
    }
}
