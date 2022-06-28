import React from 'react';

const Feature = () => {
    return (
        <div className="py-12 bg-white mb-8 rounded-lg md:shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
            <div className="lg:text-center">
           {/*<h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Features</h2>*/}
            <div>
            <i className="fas fa-cloud-upload-alt text-red-500 text-6xl my-4"></i>
          </div>
          
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
                Una forma fácil y segura para compartir archivos
            </p>
    
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                SendMe es un servicio gratuito que te permite compartir archivos de una forma fácil, rápida y segura.
            </p>

            <div className="my-4 flex justify-center">
                <img src="https://i.imgur.com/tbjGhgK.png" width="640" alt="SendMeFiles"/>
            </div>
            </div>
 
       
            <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    {/*<!-- Heroicon name: outline/globe-alt -->*/}
                    <i className="fas fa-file-download text-xl"></i>
                    </div>
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                    Controla las descargas
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                        Puedes colocar un límite de descargas a tus archivos, luego de este límite los archivos y el enlace se borran para siempre
                    </dd>
                </div>
                </div>

                <div className="flex">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    {/* <!-- Heroicon name: outline/scale -->*/}
                    <i className="fas fa-shield-alt text-xl"></i>
                    </div>
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                        Archivos privados y seguros
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Nos preocupa tu privacidad y por eso te damos la opción de que puedas compartir enlaces públicos o si lo deseas compartir un enlace con contraseña
                    </dd>
                </div>
                </div>

                <div className="flex">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    {/* <!-- Heroicon name: outline/lightning-bolt -->*/}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    </div>
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                        Sin límites
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                        No importa el tipo de archivo o su peso, con SendMe podrás enviarlo
                    </dd>
                </div>
                </div>

                <div className="flex">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                   {/* <!-- Heroicon name: outline/annotation -->>*/}
                   <i className="fas fa-running text-2xl"></i>

                    </div>
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                        Rápido y sin registro
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                        Compartir archivos es fácil y rápido, además no necesitas registrarte
                    </dd>
                </div>
                </div>
            </dl>
            </div>
        </div>
        
        </div>
    );
}

export default Feature;