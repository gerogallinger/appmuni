import { useState } from "react";

function OptionElement({ titulo, route }) {

    return (






        <a href={route} className="p-1 w-60 text-center">
            <button class="flex items-stretch gap-2 w-60 justify-around  text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                {/* <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">

                    </svg> */}
                {titulo}
            </button>
        </a>

    );
}
export default OptionElement