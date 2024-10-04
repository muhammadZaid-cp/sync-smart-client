import { axiosPatch, axiosPost } from "../../utils/axiosMethods";

export const addTokens = async (payload) => {
  const res = await axiosPost({
    path: `slackTokens`,
    payload,
  });

  return res;
};

export const updateTokens = async (payload) => {
  const res = await axiosPatch({
    path: `slackTokens`,
    payload,
  });

  return res;
};
