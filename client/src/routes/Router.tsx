import type { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "pages/Main";

const Router: FC = () => {
    return <Routes>
        <Route path="/" element={<Main />} />
    </Routes>
};

export default Router;