const HomeCopyLink = ({url}) => {
    return (
        <>
                      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
            <p className="text-center mt-10 mb-4 flex justify-center items-center">
              <span className="text-red-500 font-bold text-3xl uppercase mr-2  ">
                Tu Url es:{" "}
              </span>
            </p>
            <p className="text-center mb-4">
              <a
                href={`${process.env.frontendUrl}/links/${url}`}
                className="lg:text-2xl underline hover:text-red-500"
              >
                {`${process.env.frontendUrl}/links/${url}`}{" "}
              </a>
            </p>

            <button
              type="button"
              className="bg-red-500  mt-4 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer rounded"
              onClick={() =>
                navigator.clipboard.writeText(
                  `${process.env.frontendUrl}/links/${url}`
                )
              }
            >
              Copiar Enlace <i className="ml-2 text-1xl fas fa-copy sm:text-sm"></i>
            </button>
          </div>
        </>
    );
}

export default HomeCopyLink;