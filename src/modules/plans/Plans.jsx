import React, { useState } from "react";
import AddBenefit from "./components/AddBenefit";
import ConsultPlanInfo from "./components/ConsultPlanInfo";

const Plans = () => {
  const [form, setForm] = useState(false);
  const [planInfo, setPlanInfo] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-semibold relative pt-12 pb-4 lg:pb-16 px-4">
        Planes
      </h1>
      <div className="w-full lg:w-6/12 mt-8 mb-5 flex gap-3">
        <button
          onClick={() => {
            setForm(true);
          }}
          className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Modificar plan
        </button>
        <button
          onClick={() => {
            setPlanInfo(true);
          }}
          className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Consultar plan
        </button>
      </div>
      {form && <AddBenefit setForm={setForm} />}
      {planInfo && <ConsultPlanInfo />}
    </div>
  );
};

export default Plans;
