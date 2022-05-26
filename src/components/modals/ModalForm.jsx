import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAffiliateById } from "../../api/endpoints/afiliados/getAffiliateById";
import { updateAffiliate } from "../../api/endpoints/afiliados/updateAffiliate";

export default function ModalForm({ id, setModalAffiliateInfo }) {
  const [customerData, setCustomerData] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    updateAffiliate(id, customerData)
      .then(() => {
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAffiliateById(id)
      .then((response) => {
        if (response.status == 200) {
          let data = response.data[0];
          setCustomerData({
            cedula: data.cedula,
            nombre: data.nombre,
            apellido: data.apellido,
            direccion: data.direccion,
            telefono: data.telefono,
          });
        }
      })
      .catch((error) => {
        console.log("error :>> ", error);
      });
  }, []);

  return (
    <>
      <div
        className={
          "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
        }
      >
        <div className="relative w-[40rem] my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Información del Afiliado
              </h3>
            </div>
            {/*body*/}
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <>
                  {" "}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Cedula
                    </label>
                    <input
                      disabled
                      name="cedula"
                      autoFocus
                      value={customerData.cedula}
                      onChange={handleChange}
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-gray-200"
                      placeholder="cedula"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre
                    </label>
                    <input
                      name="nombre"
                      value={customerData.nombre}
                      onChange={handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Apellido
                    </label>
                    <input
                      name="apellido"
                      value={customerData.apellido}
                      onChange={handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Dirección
                    </label>
                    <input
                      name="direccion"
                      value={customerData.direccion}
                      onChange={handleChange}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Teléfono
                    </label>
                    <input
                      name="telefono"
                      value={customerData.telefono}
                      onChange={handleChange}
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                </>
                <div className="flex items-center justify-between border-t border-solid border-blueGray-200 rounded-b mt-16">
                  <button
                    disabled={isLoading}
                    className="bg-emerald-500 text-black active:bg-blueGray-600 text-sm font-bold uppercase py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-5/12 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Registrar Afiliado
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalAffiliateInfo(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

ModalForm.propTypes = {
  id: PropTypes.any,
  setModalAffiliateInfo: PropTypes.func,
};
