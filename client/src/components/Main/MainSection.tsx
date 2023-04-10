import type { FC } from 'react';

import Image from 'assets/images/avatar.jpg';

const MainSection: FC = () => {
  return (
    <div className="flex justify-between items-center py-40">
      <h1 className="text-6xl font-poppins font-bold text-solid-heading leading-tight text-gray-800">
        Hi 👋, <br />
        My name is <br />
        <span className="text-purple-900"> Andrew Martyshenko </span> <br />I build things for web
      </h1>
      <div className="max-w-xs">
        <img className="rounded-full max-h-80" src={Image} alt="" />
      </div>
    </div>
  );
};

export default MainSection;
