import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { auth, db } from '../configs/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';


import { setDoc, doc } from "firebase/firestore";

function SingIn() {


    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const urlFoto = "https://firebasestorage.googleapis.com/v0/b/concursoappmuni.appspot.com/o/images.png?alt=media&token=4d460702-0fba-4a79-921f-dd1c0f7ba973&_gl=1*t3qtko*_ga*Mzg1NTUwODQyLjE2OTM0MTA3MjI.*_ga_CW55HF8NVT*MTY5ODM1MDYxNi40OS4xLjE2OTgzNTExNDEuNTguMC4w"

    const navigate = useNavigate();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    async function senUserToFirebase(userToFirebase, uidUser) {
        try {
            const userDoc = doc(db, "users", uidUser);
            setDoc(userDoc, userToFirebase)
                .then(() => console.log("Document written with ID: ", uidUser))
                .catch((e) => console.error("Error adding document: ", e));
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    function validarForm() {

        if (!mail || !password || !password2 || !nombre || !apellido) {
            console.log("Completa todos los campos para registrarte");
            return;
            //TODO: hacer validacion e informar campo que falta registrar
        }

        if (!password.match(password2)) {
            console.log("Las contrasenias NO coinciden");
            return;
        }

    }

    const sendForm = async (event) => {
        event.preventDefault();
        validarForm();

        setIsLoading(true);
        console.log("Estado del loader: " + isLoading);

        await delay(1500)
        console.log("mail:" + mail);
        console.log("pass:" + password);

        console.log("Las contrasenias SI coinciden");
        //aca enviar el usuario a firebase para registrarse
        const now = new Date();
        const dateCreated = now.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" });

        const userToFirebase = {

            name: nombre,
            lastName: apellido,
            mail: mail,
            dateCreated: dateCreated

        }

        createUserWithEmailAndPassword(auth, mail, password)
            .then((userCredential) => {
                //console.log("Credenciales " + JSON.stringify(userCredential));
                const uidUser = userCredential.user.uid
                //aca setear los datos de la persona
                senUserToFirebase(userToFirebase, uidUser)

                console.log("User to firebase: " + JSON.stringify(userToFirebase));

                console.log("Estado del loader: " + isLoading);
                navigate('/inicio-sesion');
                setIsLoading(false);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Error ' + errorCode + ' ' + errorMessage);

            });

    }


    return (

        <div className="relative">
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm z-10">

                    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-slate-600" />
                    <br />
                    <h3 className='border-gray-300'>Estamos creando tu usuario</h3>
                </div>
            )}


            <div className={`flex flex-col items-center justify-center h-screen bg-slate-400 ${isLoading ? 'opacity-50' : ''}`}>
                <div className="p-2  rounded-md bg-slate-400">
                    <img src={urlFoto} alt="" className="mx-auto border rounded w-full md:w-2/3 h-auto" />
                </div>
                <div className=' w-11/12 md:w-5/12 p-8 rounded-lg drop-shadow-2xl bg-gray-200 max-w-md'>
                    <h1 className='text-center align-middle bg-gray-200 font-bold text-2xl'>
                        Crea una cuenta
                    </h1>
                    <br />
                    <form onSubmit={sendForm} className=''>
                        <div className="flex flex-col items-stretch justify-evenly bg-gray-200">


                            <input type="text"
                                className="border-gray-700 rounded-md p-2  my-1"
                                id="name"
                                value={nombre}
                                placeholder='Nombre'
                                onChange={(e) => { setNombre(e.target.value) }} />


                            <input type="text"
                                className=" border-gray-700 rounded-md p-2   my-1"
                                id="apellido"
                                value={apellido}
                                placeholder='Apellido'
                                onChange={(e) => { setApellido(e.target.value) }} />


                            <input type="email"
                                className=" border-gray-700 rounded-md p-2   my-1"
                                id="mail"
                                value={mail}
                                placeholder='Email'
                                onChange={(e) => { setMail(e.target.value) }}
                            />


                            <input type="password"
                                className=" border-gray-700 rounded-md p-2   my-1"
                                id="pass1"
                                value={password}
                                placeholder='Ingresa la contraseña'
                                onChange={(e) => { setPassword(e.target.value) }} />


                            <input type="password"
                                className=" rounded-md p-2  my-1"
                                id="pass2"
                                value={password2}
                                placeholder='Repeti la contraseña'
                                onChange={(e) => { setPassword2(e.target.value) }} />
                            <br />
                            <button type="submit"
                                className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-lg rounded focus:outline-none focus:shadow-outline">
                                Crear usuario
                            </button>
                            <br />
                            <a
                                className="text-gray-800 hover:text-blue-800 text-sm text-center bg-gray-200"
                                href="/sing-in">
                                Ya tenes una cuenta? Inicia Sesion!
                            </a>
                        </div>
                    </form>
                </div>


            </div>




        </div>


    );
}

export default SingIn;