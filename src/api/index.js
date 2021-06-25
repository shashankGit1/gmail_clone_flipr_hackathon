import { auth, provider } from '../firebase'
export const signInGoogle = () => {
    return new Promise((resolve, reject) => {
        auth.signInWithPopup(provider).then((res) => {
            console.log(res)
            resolve(res)
        }).catch((err) => {
            console.log(err)
            reject(err)
        })
    })
}

export const signUp = (email, password) => {
    return new Promise((resolve, reject) => {
        auth.createUserWithEmailAndPassword(email, password).then((res) => {
            console.log(res)
            resolve(res)
        }).catch((err) => {
            console.log(err)
            reject(err)
        })
    })
}
