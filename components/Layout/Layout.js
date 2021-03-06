import React from "react";
import Head from "next/head";
import Header from "./../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>SendMe - Comparte archivos facilmente</title>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Megrim&family=Permanent+Marker&family=Roboto:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta
          name="description"
          content="Comparte tus archivos de forma fácil, segura y privada, tambien puedes agregar una contraseña y un limite de descargas a tus enlaces"
        />
        <meta
          name="keywords"
          content="Sendme, Sendmefiles, sendmefiles.cloud, sendme cloud, SendMe, send-me, send-files, Send-Me, Send Me, Send Files, Compartir archivos, nube privada, compartir archivos privados, archivos seguros, limite de descarga, archivos, archivos encriptados"
        />
        {/* OG for Facebook  */}
        <meta property="og:url" content="https://sendmefiles.cloud" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SendMe" />
        <meta
          property="og:description"
          content="Comparte tus archivos de forma fácil, segura y privada, tambien puedes agregar una contraseña y un limite de descargas a tus enlaces"
        />
        <meta
          property="og:image"
          content="https://sendmefiles.cloud/assets/img/landing-playa.jpg"
        />

        {/* -Twitter card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@semdmefiles" />
        <meta name="twitter:creator" content="@salevant3X" />
        <meta
          name="twitter:title"
          content="SendMe - una plataforma para compartir archivos"
        />
        <meta name="twitter:description" content="Comparte tus archivos de forma fácil, segura y privada, tambien puedes agregar una contraseña y un limite de descargas a tus enlaces" />
        <meta
          name="twitter:image"
          content="https://sendmefiles.cloud/assets/img/landing-playa2.jpg"
        />
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <Header />
          <div className="mt-20">{children}</div>
        </div>

        <footer className="text-center mb-4 ">
          <a
            href="https://twitter.com/alevant3X"
            target="_blank"
            className="text-red-500 underline hover:text-red-700"
          >
            {" "}
            &copy; 2021 by Alevante 🇨🇴
          </a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
