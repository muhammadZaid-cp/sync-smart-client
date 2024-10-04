import { axiosPost } from "../../utils/axiosMethods";

export const loginUser = async (payload) => {
  const res = await axiosPost({
    path: `auth/signin`,
    payload,
  });

  return res;
};

export const signupUser = async (payload) => {
  console.log(payload);
  const res = await axiosPost({
    path: `auth/signup`,
    payload,
  });

  return res;
};
