import config from "../../../config";

export const deleteUser = async (cedula) => {
  return fetch(`${config().SERVER_URL}/customer/deleteCustomer/${cedula}`, {
    method: "DELETE",
  }).then((response) => response.json());
};
