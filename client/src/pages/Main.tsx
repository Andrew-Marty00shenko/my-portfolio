import type { FC } from "react";

import Header from "components/Main/Header";
import MainSection from "components/Main/MainSection";
import Stack from "components/Main/Stack";

const Main: FC = () => {
    return <div className="container mx-auto">
        <Header />
        <MainSection />
        <Stack />
    </div>
}

export default Main;