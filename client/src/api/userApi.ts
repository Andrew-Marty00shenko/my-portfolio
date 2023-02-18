import axios from "./axios";

import type { IUserRegisterForm } from "pages/Register";
import type { IUserLoginForm } from "pages/Login";

export default {
    register: async ({ name, email, password }: IUserRegisterForm) => {
        const response = await axios.post<IUserRegisterForm>('/user/registration', { name, email, password });

        return response;
    },
    login: async ({ email, password }: IUserLoginForm) => {
        const response = await axios.post<IUserLoginForm>('/user/login', { email, password });

        return response;
    }
}