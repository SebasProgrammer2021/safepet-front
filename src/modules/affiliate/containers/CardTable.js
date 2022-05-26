import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import config from "../../../config";
import NotificationDropdown from "./NotificationDropdown";
// eslint-disable-next-line no-undef
const axios = require("axios");

export default function CardTable({ color }) {
  const [data, setData] = useState();

  const getAfiliates = () => {
    axios
      .get(`${config().SERVER_URL}/customer/getAllCustomers`)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error, "error");
        alert(error);
      });
  };

  useEffect(() => {
    getAfiliates();
  }, []);

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded "
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex justify-between">
              <h3
                className={
                  "font-semibold text-xl " +
                  (color === "light" ? "text-blueGray-700" : "text-black")
                }
              >
                Listado Afiliados{" "}
              </h3>
              <button
                onClick={() => {
                  getAfiliates();
                }}
                className="bg-[#1fc4da] text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png"
                    alt="reload icon"
                    className=""
                  />
                  <span>Refrescar</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Cedula
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Nombre
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Teléfono
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Dirección
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {data?.map(
                ({ cedula, nombre, apellido, telefono, direccion }, index) => (
                  <tr key={index}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {cedula}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                      {nombre}&nbsp;{apellido}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                      {telefono}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                      {direccion}
                    </td>
                    <td className="">
                      <NotificationDropdown cedula={cedula} />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.propTypes = {
  color: PropTypes.string,
};
