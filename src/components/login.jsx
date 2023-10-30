import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { auth } from '../configs/firebaseConfig'

import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {


    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!mail || !password) {
            console.log("Please enter your username and password.");
            alert("Please enter your username and password.")
            //TODO: hacer un popup para que muestre que debe ingresar alguno de los 2 campos
            return;
        }

        try {
            signInWithEmailAndPassword(auth, mail, password)
                .then((userCredential) => {
                    // Signed in 
                    //setUser(userCredential.user);

                    console.log("Usuario identificado" + JSON.stringify({
                        email: mail,
                        password: password
                    }));
                    console.log(userCredential.user);
                    setMail('')
                    setPassword('')
                    //navigate('/option-list');
                })
                .catch((error) => {

                    if (error.code == "auth/invalid-login-credentials") {
                        console.log("Credenciales invalidas por favor verifica los datos que ingresaste");
                    } else {
                        console.log(JSON.stringify(error));
                    }
                });


        } catch (e) {
            console.log('Error ' + e);
        }
    }

    const urlFoto = "https://firebasestorage.googleapis.com/v0/b/concursoappmuni.appspot.com/o/images.png?alt=media&token=4d460702-0fba-4a79-921f-dd1c0f7ba973&_gl=1*t3qtko*_ga*Mzg1NTUwODQyLjE2OTM0MTA3MjI.*_ga_CW55HF8NVT*MTY5ODM1MDYxNi40OS4xLjE2OTgzNTExNDEuNTguMC4w"

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-400">
            <div className="p-2 rounded-md bg-slate-400">
                <img src={urlFoto} alt="" className="mx-auto border rounded w-full md:w-2/3 h-auto" />
            </div>
            <div id="form-container"
                className="p-12 rounded-lg shadow-2xl m-6 w-11/12 md:w-5/12 bg-slate-200">
                <h2 id="form-title"
                    className="text-center text-3xl font-bold mb-10 text-gray-800 bg-slate-200">
                    Inicio de Sesion
                </h2>
                <form className="space-y-5 bg-slate-200" onSubmit={handleSubmit}>
                    <input className="w-full h-12  px-3 rounded-lg bg-white"
                        placeholder="Email"
                        id="mail"
                        name=""
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        type="email" />

                    <input className="w-full h-12  px-3 rounded-lg bg-white"
                        placeholder="Contraseña"
                        id="pass"
                        name=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" />
                    <button
                        className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-lg rounded focus:outline-none focus:shadow-outline">
                        Iniciar Sesion
                    </button>
                    <div className='flex flex-col  text-center'>
                        <a
                            className="text-gray-800 hover:text-blue-800 bg-slate-200 text-sm "
                            href="#">
                            Olvidaste tu contraseña?
                        </a>
                        <a
                            className="text-gray-800 hover:text-blue-800 text-sm bg-slate-200"
                            href="/sing-up">
                            Crear una cuenta
                        </a>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login;