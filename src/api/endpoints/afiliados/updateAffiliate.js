import config from "../../../config";

export const updateAffiliate = async (cedula, params) => {
  return fetch(`${config().SERVER_URL}/customer/updateCustomer/${cedula}`, {
    method: "UPDATE",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(params),
  }).then((response) => response.json());
};
