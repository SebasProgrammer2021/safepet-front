import React from "react";
import { Link } from "react-router-dom";
import CardTable from "./containers/CardTable";

export default function AffiliateModule() {
  return (
    <>
      <h2 className="text-3xl font-semibold relative pt-12 pb-16 px-4">
        Afiliados
      </h2>
      <div className="px-4 mb-12 flex gap-5">
        <Link
          to="/register-user"
          className="bg-green-500 active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative"
        >
          <i className="fas fa-plus"></i> Nuevo
        </Link>
        <Link
          to="/consult-copayment"
          className="bg-blue-500 active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative"
        >
          Consultar copago
        </Link>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}
