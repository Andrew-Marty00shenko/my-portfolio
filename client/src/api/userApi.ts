import axios from "./axios";

import type { IUserRegisterForm } from "pages/Register";

export default {
    register: async ({ name, email, password }: IUserRegisterForm) => {
        const response = await axios.post<IUserRegisterForm>('/user/registration', { name, email, password });

        return response;
    }
}