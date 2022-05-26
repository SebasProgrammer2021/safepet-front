import React, { useState } from "react";
import config from "../../../config";
// eslint-disable-next-line no-undef
const axios = require("axios");
import SmallModal from "../../../components/modals/SmallModal";

export default function CardCopayment() {
  const [cedula, setCedula] = useState();
  const [data, setData] = useState();
  const [showModal, setShowModal] = React.useState({
    active: false,
    message: "",
    title: "",
  });
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cedula) {
      setErrorMessage(false);
      axios
        .get(`${config().SERVER_URL}/customer/consultCopago/${cedula}`)
        .then(function (response) {
          if (response?.data?.data?.length === 0) {
            setCedula("");
            setShowModal({
              active: true,
              title: "Atención",
              message: "El usuario no existe",
            });
            setData();
          }
          setData(response.data.data[0].copago);
          setShowModal({
            active: true,
            title: "Valor a pagar",
            message:
              "Safepet le informa que su valor a pagar por concepto de copago es de:",
          });
          setCedula("");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Consultar copago
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Información del usuario
            </h6>
            <div className="">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Número Credencial
                  </label>
                  <input
                    data-testid="inputCredencial"
                    autoFocus
                    type="number"
                    value={cedula}
                    onChange={(e) => {
                      setCedula(e.target.value);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  {errorMessage && (
                    <p className="text-red-600 text-base">
                      Este campo es requerido
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 mt-8">
                <button
                  className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Consultar
                </button>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            {showModal.active && (
              <SmallModal
                data={data}
                setShowModal={setShowModal}
                showModal={showModal}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
}
