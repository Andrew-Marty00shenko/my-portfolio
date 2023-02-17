import type { FC } from "react";

const Stack: FC = () => {
    return <div className="flex items-between py-40">
        <h1 className="text-6xl font-dm-sans font-bold text-solid-heading leading-tight ">
            Hi 👋, <br />
            My name is <br />
            <span className="text-purple"> Andrew Martyshenko </span> <br />
            I build things for web
        </h1>
    </div>
}

export default Stack;