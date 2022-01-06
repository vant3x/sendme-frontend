import React from "react";
import Layout from "./../components/Layout/Layout";

const RecuperarPassword = () => {
  return (
    <>
      <Layout>
        <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-800 text-center my-4">
          Recupera tu contraseña
        </h2>
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
          <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg">
              <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-2 text-center">
              <i className="fas fa-envelope-square text-red-500 text-6xl mb-2"></i>

                <p className="mb-2">
                  Te enviaremos un enlace a tu correo para recuperar tu
                  contraseña, no compartas este enlace con nadie:
                </p>
                <input
                  type="email"
                  placeholder="Ingresa tu email *"
                  className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="submit"
                  className="bg-red-500  mt-4 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer"
                  value="Recuperar contraseña"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RecuperarPassword;
