import { axiosDelete, axiosGet } from "../../utils/axiosMethods";

export const getAllAssistants = async (payload) => {
    const res = await axiosGet({
        path: `assistant`,
        payload
    });

    return res;
};

export const deleteAssistant = async ({ id }) => {
    const res = await axiosDelete({
        path: `assistant/${id}`
    });
    return res
};

