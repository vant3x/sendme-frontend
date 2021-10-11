import React, { useState, useEffect, useContext } from "react";
import axiosClient from "../../config/axios";
import styled from "styled-components";
import { useRouter } from "next/router";

const ProfileForm = ({ user }) => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(async () => {
    const userInfo = await axiosClient.get(
      `/api/user/profile/${user && user.id ? user.id : user && user._id ? user._id : null}`
    );
    setUserProfile(userInfo.data.user);
  }, [user]);

  const UserIconContainer = styled.div`
    border-radius: 100px;
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
  `;

  return (
    <div className="mt-10 sm:mt-4">
      <div className="mb-8">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h3 className="text-3xl text-gray-800 text-center mb-4">
                  Mi Cuenta
                </h3>

                <div className="flex">
                  <UserIconContainer className="bg-gray-100 border">
                    <span className="fas fa-user text-4xl text-gray-600"></span>
                  </UserIconContainer>
                  <button className="border border-gray-800 p-2 border-2">
                    Subir Avatar
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-6 mt-4">
                  <div className="col-span-12 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre:
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      defaultValue={userProfile ? userProfile.name : null}
                      id="first_name"
                      autoComplete="given-name"
                      className="shadow appereance-none  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border border-gray-400 rounded-md"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apellido:
                    </label>
                    <input
                      defaultValue={userProfile ? userProfile.lastname : null}
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="shadow appereance-none  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border border-gray-400 rounded-md"
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email:
                    </label>
                    <input
                      defaultValue={userProfile ? userProfile.email : null}
                      placeholder="sendme@email.com"
                      type="email"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      className="shadow appereance-none  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border border-gray-400 rounded-md"
                    />
                  </div>

                  {/*<div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">País</label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                     </div>*/}

                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Usuario:
                    </label>
                    <input
                      defaultValue={userProfile ? userProfile.username : null}
                      placeholder="sendme@email.com"
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="shadow appereance-none  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border border-gray-400 rounded-md"
                    />
                  </div>

                  {/*<div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">Contraseña:</label>
                      <input type="password" name="password" id="password" placeholder="Ingresa una nueva contraseña" 
                      className="shadow appereance-none  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 shadow-sm sm:text-sm border border-gray-400 rounded-md"/>
                    </div> */}

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <a
                      href=""
                      className="text-red-400 underline hover:text-red-600"
                    >
                      Cambiar Contraseña
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Actualizar Cambios
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
