import config from "../../../config";

export const getAffiliateById = async (cedula) => {
  return fetch(`${config().SERVER_URL}/customer/getById/${cedula}`, {}).then(
    (response) => response.json()
  );
};
