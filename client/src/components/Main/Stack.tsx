import type { FC } from 'react';

import HtmlSvg from 'assets/images/icons/html.svg';
import CssSvg from 'assets/images/icons/css.svg';
import JsSvg from 'assets/images/icons/js.svg';
import ReactSvg from 'assets/images/icons/react.svg';
import TailwindSvg from 'assets/images/icons/tailwind.svg';
import ReduxSvg from 'assets/images/icons/redux.svg';
import SassSvg from 'assets/images/icons/sass.svg';
import VsCodeSvg from 'assets/images/icons/vs-code.svg';
import GitSvg from 'assets/images/icons/git.svg';
import GithubSvg from 'assets/images/icons/github.svg';
import TypescriptSvg from 'assets/images/icons/typescript.svg';
import NodeJsSvg from 'assets/images/icons/nodejs.svg';

const images = [
  { id: 1, image: HtmlSvg },
  { id: 2, image: CssSvg },
  { id: 3, image: JsSvg },
  { id: 4, image: TypescriptSvg },
  { id: 5, image: ReactSvg },
  { id: 6, image: ReduxSvg },
  { id: 7, image: TailwindSvg },
  { id: 8, image: NodeJsSvg },
  { id: 9, image: GitSvg },
  { id: 10, image: GithubSvg },
  { id: 11, image: VsCodeSvg },
  { id: 12, image: SassSvg },
];

const Stack: FC = () => {
  return (
    <div className="py-40 ">
      <h2 className="text-5xl font-bold text-center text-purple-900 font-poppins w-full">
        My Tech Stack
      </h2>
      <p className="font-poppins text-center my-7 font-normal text-2xl text-gray-600">
        Technologies I’ve been working with recently
      </p>
      <div className="flex justify-between items-center flex-wrap">
        {images.map((image) => {
          return (
            <div key={image.id} className="w-1/6 flex justify-center py-8">
              <img src={image.image} alt={image.image} width={105} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stack;
