import axios from "axios";

export const URL = "https://fluffieapi.herokuapp.com"
// const URL = "http://localhost:8000";

export const userPreferance = async (
  phoneNumber: number,
  skinType: string,
  skinConcern: string,
  productRange: string,
  skinColor: string,
  mainProduct: string,
  supplementaryProduct: string
) => {
  let request = {};
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };
  request["phone_number"] = `${phoneNumber}`;
  request["skin_type"] = skinType;
  request["concern"] = skinConcern;
  request["price_range"] = productRange;
  request["skin_tone"] = skinColor;
  request["main_product"] = mainProduct;
  request["supplimentary_product"] = supplementaryProduct;
  return axios.post(`${URL}/user/userPreferance`, request, {
    headers: headers,
  });
};

export const userRegisteration = async (
  phoneNumber: number,
  userName: string,
  userDOB: string,
  userPassword: string
) => {
  let request = {};
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };
  request["phone_number"] = `${phoneNumber}`;
  request["first_name"] = userName;
  request["date_of_birth"] = userDOB;
  request["password"] = userPassword;
  return axios.post(`${URL}/user/signup`, request, {
    headers: headers,
  });
};

export const login = (
  phoneNumber: number,
  password: string
): Promise<{ data: { token?: string } }> => {
  let request = {};
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };
  request["phone_number"] = `${phoneNumber}`;
  request["password"] = password;
  return axios.post(`${URL}/user/login`, request, {
    headers: headers,
  });
};

export const searchProductsApi = (payload, abortController) => {
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };

  return axios.post(
    `${URL}/api/search`,
    JSON.stringify({
      payload,
    }),

    {
      headers: headers,
      signal: abortController.signal,
    }
  );
};

export const getFeaturedProducts = () => {
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };

  return axios.post(
    `${URL}/api/featured`,

    {
      headers: headers,
    }
  );
};

export const loadUSerPreference = (payload) => {
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };

  return axios.post(
    `${URL}/user/userPreferance`,
    JSON.stringify({
      payload,
    }),

    {
      headers: headers,
    }
  );
};
export const verifyNumber = async (phoneNumber: number) => {
  let request = {};
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };
  request["phonenumber"] = phoneNumber;
  request["channel"] = "sms";

  return axios.post(`${URL}/verify/getcode`, request, {
    headers: headers,
  });
};

export const resetVerifyCode = async (phoneNumber: number) => {
  let request = {};
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };
  request["phonenumber"] = phoneNumber;
  request["channel"] = "sms";

  return axios.post(
    `${URL}/verify/reset-password-code`,
    request,
    {
      headers: headers,
    }
  );
};

export const verifyCode = async (userCode: number, phoneNumber: number) => {
  let request = {};
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };
  request["to"] = phoneNumber;
  request["code"] = userCode;
  return axios.post(
    `${URL}/verify/verifycode?phonenumber=${request["to"]}&code=${request["code"]}`,
    {
      headers: headers,
    }
  );
};
