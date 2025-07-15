export const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col justify-center items-center px-4 text-center">
            <h1 className="text-9xl font-extrabold text-indigo-600 drop-shadow-sm">404</h1>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-800">
                Página no encontrada
            </h2>

            <p className="mt-2 text-lg text-gray-600 max-w-md">
                La página que estás buscando no existe o fue movida. Asegúrate de que la URL sea
                correcta.
            </p>

            <a
                href="/"
                className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white text-base font-medium rounded-xl hover:bg-indigo-700 transition shadow-md"
            >
                Volver al inicio
            </a>
        </div>
    );
};
