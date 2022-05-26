import React, { useState } from "react";
import PropTypes from "prop-types";

const AddBenefit = ({ setForm }) => {
  const [petData, setPetData] = useState({
    nombre: "",
    edad: "",
    raza: "",
    cedula: "",
  });
  const handleChange = (e) => {
    setPetData({
      ...petData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(petData);
    e.preventDefault();
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full md:w-8/12 lg:w-7/12 mb-6 shadow-lg rounded-lg border-0 ">
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
        <h2 className="text-blueGray-400 text-sm mt-3 mb-2 font-bold uppercase">
          Formulario para la modificar del plan
        </h2>
        <hr className="bg-black text-black p-0.5 mb-6 rounded-full" />
        <div className="">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Número Credencial Afiliado
              </label>
              <input
                data-testid="inputCredencial"
                placeholder="numero credencial"
                autoFocus
                type="number"
                name="cedula"
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
              {/* {errorMessage && (
                    <p className="text-red-600 text-base">
                      Este campo es requerido
                    </p>
                  )} */}
            </div>
          </div>
          <>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Nombre
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="nombre"
                onChange={handleChange}
                placeholder="Nombre"
                type="text"
                value={petData.nombre}
              />
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Edad
              </label>
              <input
                autoFocus
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="edad"
                onChange={handleChange}
                placeholder="Edad"
                type="number"
                value={petData.edad}
              />
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Raza
              </label>
              <input
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="raza"
                onChange={handleChange}
                placeholder="Raza"
                type="text"
                value={petData.raza}
              />
            </div>
          </>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <div className="flex justify-between items-center mt-8">
            <div className="w-full lg:w-6/12 px-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Añadir mascota
              </button>
            </div>
            <button
              onClick={() => {
                setForm(false);
              }}
              className="underline"
            >
              close
            </button>
          </div>
        </div>
        <hr className="mt-6 border-b-1 border-blueGray-300" />
        {/* {showModal.active && (
              <SmallModal
                data={data}
                setShowModal={setShowModal}
                showModal={showModal}
              />
            )} */}
      </div>
    </div>
  );
};

export default AddBenefit;

AddBenefit.propTypes = {
  setForm: PropTypes.func,
};
