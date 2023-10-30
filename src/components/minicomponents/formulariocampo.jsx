function FormularioCampo({ }) {
    return (

        <div>
            <input className="w-full h-12 border border-gray-800 px-3 rounded-lg bg-white"
                placeholder="Email"
                id="mail"
                name=""
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="email" />
        </div>
    );
}
export default FormularioCampo