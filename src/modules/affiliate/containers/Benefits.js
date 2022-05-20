import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";PropTypes
import config from "../../../config";
const axios = require("axios");

export default function Benefits({
  benefitsSeleted,
  setBenefitsSeleted,
  setTotal,
  total,
}) {
  const [data, setData] = useState();
  const [checkedState, setCheckedState] = useState(new Array(10).fill(false));

  const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
  var configHeaders = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  useEffect(() => {
    axios
      .get(`${config().SERVER_URL}/benefit/getAll`, configHeaders)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // function that calculates the mensual amount and set the benefits ids array
  const handleChange = (position, idBenefit) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + data[index].costo;
        }
        return sum;
      },
      0
    );
    setTotal(totalPrice);

    let find = benefitsSeleted.indexOf(idBenefit);
    if (find > -1) {
      benefitsSeleted.splice(find, 1);
    } else {
      benefitsSeleted.push(idBenefit);
    }
    setBenefitsSeleted(benefitsSeleted);
  };

  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-lightBlue-400 mb-8">
        Beneficios
      </h1>
      {data?.map(({ costo, idBeneficio, nombre }, index) => {
        return (
          <div key={index}>
            <label className="cursor-pointer text-xl flex" key={index}>
              <input
                className="form-checkbox border-0 rounded text-blueGray-700 w-5 h-5 ease-linear transition-all duration-150 mr-2"
                name={nombre}
                onChange={(e) => handleChange(index, idBeneficio, e)}
                type="checkbox"
                value={nombre}
                selected={benefitsSeleted.includes(idBeneficio)}
              />
              <span className="w-full">{`${nombre}`}</span>
              <span className="text-right w-full">${`${costo}`}</span>
              <span className="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
            </label>
          </div>
        );
      })}
      <div className="flex text-xl mt-5">
        <div className="">Total:</div>
        <div className="w-full text-right">{getFormattedPrice(total)}</div>
      </div>
    </div>
  );
}

Benefits.propTypes = {
  benefitsSeleted: PropTypes.array,
  setBenefitsSeleted: PropTypes.func,
  setTotal: PropTypes.func,
  total: PropTypes.number,
};
