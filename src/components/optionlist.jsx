import { useNavigate } from 'react-router-dom';
import OptionElement from './minicomponents/optionElement'



function OptionList() {

    const urlFoto = "https://firebasestorage.googleapis.com/v0/b/concursoappmuni.appspot.com/o/images.png?alt=media&token=4d460702-0fba-4a79-921f-dd1c0f7ba973&_gl=1*t3qtko*_ga*Mzg1NTUwODQyLjE2OTM0MTA3MjI.*_ga_CW55HF8NVT*MTY5ODM1MDYxNi40OS4xLjE2OTgzNTExNDEuNTguMC4w"



    return (

        <div className="flex flex-col items-center justify-center h-screen bg-slate-400">
            <div className="p-2 rounded-md bg-slate-400">
                <img src={urlFoto} alt="" className="mx-auto border rounded w-full md:w-2/3 h-auto" />
            </div>
            <div className="p-12 rounded-lg shadow-2xl m-6 w-11/12 md:w-5/12 bg-slate-200  max-w-md">
                <h2 className="text-center text-2xl font-bold py-3 text-gray-800 bg-slate-200">
                    Bienvenido Usuario!</h2>

                <h2 className="text-center text-xl font-bold p-2 text-gray-800 bg-slate-200">
                    Que queres hacer?</h2>

                <br />
                <div className='flex flex-col items-center border rounded-lg py-4'>
                    <OptionElement titulo="Crear un nuevo reclamo" route="" />
                    <OptionElement titulo="Lista de reclamos" route="" />
                    <OptionElement titulo="Mi título" route="" />
                    <OptionElement titulo="Mi título" route="" />



                </div>
            </div>

        </div>
    );
}
export default OptionList