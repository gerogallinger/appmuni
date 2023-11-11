import { useState } from 'react';
import { storage } from '../configs/firebaseConfig';
import { uploadBytesResumable, ref, getStorage } from 'firebase/storage'

function NuevoReclamo() {


    //#region states
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [lastName, setLastName] = useState('')
    const [mail, setMail] = useState('')
    const [nroDoc, setNroDoc] = useState('')
    const [tipoReclamo, setTipoReclamo] = useState('')
    const [calle, setCalle] = useState('')
    const [alturaDireccion, setAlturaDireccion] = useState('')
    const [description, setDescription] = useState('')
    const [barrio, setBarrio] = useState('')
    const [fechaReclamo, setFechaReclamo] = useState('')
    const [entreCalle1, setEntreCalle1] = useState('')
    const [entreCalle2, setEntreCalle2] = useState('')
    const [file, setFile] = useState('')
    const [step, setStep] = useState(1);

    //#endregion

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };


    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        console.log(file);
    };

    const handleUpload = (event) => {
        event.preventDefault();

        // Crear una referencia al lugar donde quieres almacenar el archivo
        const refStorage = ref(storage, file.name);
        console.log("StorareRef :" + refStorage);

        console.log("StorageRefReclamos" + 'reclamos/' + refStorage);
        const mountainImagesRef = ref(storage, 'reclamos/' + refStorage);


        // Leer el contenido del archivo
        const reader = new FileReader();
        reader.onload = (e) => {
            // Crear un objeto Blob a partir del contenido del archivo
            const fileContent = new Uint8Array(e.target.result);

            // Subir el archivo
            const uploadTask = uploadBytesResumable(refStorage, fileContent);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Progreso de la carga
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + ' % done');
                    //console.log("subiendo: " + JSON.stringify(snapshot));
                },
                (error) => {
                    console.log("error: " + JSON.stringify(error));
                },
                () => {
                    // Carga completada
                    console.log("Archivo subido");
                }
            );
        };
        reader.readAsArrayBuffer(file);
    };


    return (

        <div className="flex flex-col items-center justify-center h-screen bg-slate-400">
            <div className="p-2 rounded-md bg-slate-400">

            </div>
            <div className="py-12 rounded-lg shadow-2xl m-6 w-11/12 md:w-5/12 bg-slate-200  max-w-md">
                <h2 className="text-center text-2xl font-bold py-2 text-gray-800 bg-slate-200">
                    Nuevo Reclamo</h2>

                <br />

                <div className='flex flex-col items-center border rounded-lg p-2 py-2 m-2 shadow-md '>
                    <form onSubmit={handleUpload} className='p-1'>
                        {step === 1 && (
                            <div>
                                <h2 className="text-center text-lg p-3 text-gray-800 bg-slate-200">
                                    Datos del Reclamante
                                </h2>
                                <br />
                                {/* <p className='text-center px-2'>
                                    Completa los campos para cargar el formulario</p>
                                <br /> */}
                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Nro Documento"
                                    id="nroDoc"
                                    name=""
                                    value={nroDoc}
                                    onChange={(e) => setNroDoc(e.target.value)}
                                    type="number" />
                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Nombre"
                                    id="name"
                                    name=""
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text" />
                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Apellido"
                                    id="lastname"
                                    name=""
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text" />
                                <br />
                                <br />
                                <button onClick={nextStep}
                                    className="w-full h-12 bg-boston-blue-500 hover:bg-boston-blue-300 text-white font-bold py-2 px-4 text-lg rounded focus:outline-none focus:shadow-outline">
                                    Siguiente
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-center text-lg  p-3 bg-rock-blue-600  text-white rounded-md">
                                    Datos del Reclamo
                                </h2>

                                {/* <input type="file" onChange={handleFileInputChange} /> */}
                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Calle 1"
                                    id="calle1"
                                    name=""
                                    value={entreCalle1}
                                    onChange={(e) => setEntreCalle1(e.target.value)}
                                    type="text" />
                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Calle 2"
                                    id="calle2"
                                    name=""
                                    value={entreCalle2}
                                    onChange={(e) => setEntreCalle2(e.target.value)}
                                    type="text" />
                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Calle"
                                    id="calle"
                                    name=""
                                    value={lastName}
                                    onChange={(e) => setCalle(e.target.value)}
                                    type="text" />
                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Altura"
                                    id="altura"
                                    name=""
                                    value={nroDoc}
                                    onChange={(e) => setAlturaDireccion(e.target.value)}
                                    type="number" />
                                <div className='flex p-1 '>

                                    <button onClick={prevStep}
                                        className="w-full h-12 bg-boston-blue-500 hover:bg-boston-blue-300 text-white font-bold m-1 text-lg rounded focus:outline-none focus:shadow-outline">
                                        Anterior
                                    </button>
                                    <button onClick={nextStep}
                                        className="w-full h-12 bg-boston-blue-500 hover:bg-boston-blue-300 text-white font-bold m-1 text-lg rounded focus:outline-none focus:shadow-outline">
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* TODO: tenemos que hacer que valla atras  tambien*/}
                        {step === 3 &&

                            <div>
                                <h2 className="text-center text-lg  p-3 bg-rock-blue-600  text-white rounded-md">
                                    Datos del Reclamo
                                </h2>

                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Descripcion"
                                    id="description"
                                    name=""
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    type="text" />
                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Barrio"
                                    id="barrio"
                                    name=""
                                    value={barrio}
                                    onChange={(e) => setBarrio(e.target.value)}
                                    type="text" />
                                <input className="w-full h-12 border px-2 rounded-lg my-1 bg-white"
                                    placeholder="Tipo"
                                    id="tipoReclamo"
                                    name=""
                                    value={tipoReclamo}
                                    onChange={(e) => setTipoReclamo(e.target.value)}
                                    type="text" />
                                <input type="file"
                                    className="text-sm text-stone-500 file:mr-5 file:py-1 file:px-3 file:border-[1px]
                                    file:text-xs file:font-medium file:bg-stone-50 file:text-stone-700
                                    hover:file:cursor-pointer hover:file:bg-blue-50
                                    hover:file:text-blue-700"
                                    onChange={handleFileInputChange}
                                    id="formFile" />


                                <div className='flex p-1 '>

                                    <button onClick={prevStep}
                                        className="w-full h-12 bg-boston-blue-500 hover:bg-boston-blue-300 text-white font-bold m-1 text-lg rounded focus:outline-none focus:shadow-outline">
                                        Anterior
                                    </button>

                                    <button type="submit"
                                        className="w-full h-12 bg-boston-blue-500 hover:bg-boston-blue-300 text-white font-bold m-1 text-lg rounded focus:outline-none focus:shadow-outline">
                                        Enviar Reclamo
                                    </button>
                                </div>
                            </div>
                        }




                    </form>
                </div>
            </div>

        </div>
    );
}
export default NuevoReclamo