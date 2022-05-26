import React from "react";
import PropTypes from "prop-types";

const RegisterPetsForm = ({ userPets, petData, setPetData }) => {
  const handleChange = (e) => {
    setPetData({
      ...petData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPet = (e) => {
    e.preventDefault();
    userPets.push(petData);
    setPetData({ nombre: "", edad: "", raza: "" });
  };

  return (
    <>
      <div className="">
        <div className="items-left justify-center">
          <div className="flex flex-col">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <fieldset>
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
                <button
                  className="bg-lime-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddPet(e);
                  }}
                >
                  Añadir mascota
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPetsForm;

RegisterPetsForm.propTypes = {
  userPets: PropTypes.array,
  petData: PropTypes.object,
  setPetData: PropTypes.func,
};
