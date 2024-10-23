import { axiosPost } from "../../utils/axiosMethods";

export const getAddToSlackUrl = async (payload) => {
    const res = await axiosPost({
        path: `slack/add-to-slack`,
        payload
    });

    return res;
};
