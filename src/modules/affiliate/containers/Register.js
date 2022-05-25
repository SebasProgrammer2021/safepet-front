import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Benefits from "./Benefits";
import config from "../../../config";
import Payment from "./Payment";
import RegisterPetsForm from "./RegisterPetsForm";
const axios = require("axios");

export default function Register() {
  const [benefitsSeleted, setBenefitsSeleted] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [proceedPayment, setProceedPayment] = useState(false);
  const [proceedRegisterPet, setproceedRegisterPet] = useState(false);
  const [paymentMethodSelected, setPaymentMethodSelected] = useState({
    paymentMethod: "",
  });
  const [petData, setPetData] = useState({
    nombre: "",
    edad: "",
    raza: "",
  });
  const [downloadAvailable, setDownloadAvailable] = useState();
  const userPets = useState([]);
  const [customerData, setCustomerData] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    beneficios: benefitsSeleted,
    valor: "",
    pets: userPets,
  });
  let title;
  let navigate = useNavigate();

  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    customerData.valor = total * userPets.length;
    setIsLoading(true);

    axios
      .post(`${config().SERVER_URL}/customer/add`, customerData)
      .then(function (response) {
        alert("registro exitoso");
        setDownloadAvailable(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!proceedRegisterPet) {
    title = "Registro cliente";
  } else if (!proceedPayment) {
    title = "Registro mascota";
  } else {
    title = "Seleccionar método de pago";
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-lg font-bold">
                    {title}
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <fieldset disabled={isLoading}>
                  <form onSubmit={handleSubmit}>
                    {!proceedPayment ? (
                      !proceedRegisterPet ? (
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
                              name="cedula"
                              autoFocus
                              onChange={handleChange}
                              type="number"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                              onChange={handleChange}
                              type="number"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Password"
                            />
                          </div>
                          <hr className="mt-6 border-b-1 border-blueGray-300" />
                          <div className="mt-8">
                            <Benefits
                              benefitsSeleted={benefitsSeleted}
                              setBenefitsSeleted={setBenefitsSeleted}
                              setTotal={setTotal}
                              total={total}
                            ></Benefits>
                          </div>
                        </>
                      ) : (
                        <RegisterPetsForm
                          userPets={userPets}
                          petData={petData}
                          setPetData={setPetData}
                        />
                      )
                    ) : (
                      <Payment
                        paymentMethodSelected={paymentMethodSelected}
                        setPaymentMethodSelected={setPaymentMethodSelected}
                      ></Payment>
                    )}
                    <div className="text-center mt-6">
                      {!proceedPayment ? (
                        !proceedRegisterPet ? (
                          <button
                            className="bg-blueGray-800 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            onClick={(e) => {
                              e.preventDefault();
                              setproceedRegisterPet(true);
                            }}
                          >
                            Continuar
                          </button>
                        ) : (
                          <button
                            className="bg-blueGray-800 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            onClick={(e) => {
                              e.preventDefault();
                              setProceedPayment(true);
                            }}
                          >
                            Continuar
                          </button>
                        )
                      ) : (
                        <>
                          <button
                            className="bg-emerald-500 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            type="submit"
                          >
                            Registrar Afiliado
                          </button>
                        </>
                      )}
                    </div>
                  </form>
                </fieldset>
                {downloadAvailable ? (
                  <div className="mt-12">
                    <a
                      className="bg-lightBlue-600 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 bg-amber-500"
                      href="https://docs.google.com/document/d/1glAJl785pocdj51yfRjXcmy3JqsPdnXU/edit?usp=sharing&ouid=104637590737949013945&rtpof=true&sd=true"
                      target="_blank"
                      rel="noreferrer"
                      download="contrato"
                      onClick={(e) => {
                        setProceedPayment(false);
                        setIsLoading(false);
                        setDownloadAvailable(false);
                        navigate("/affiliate");
                      }}
                    >
                      Descargar contrato
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
