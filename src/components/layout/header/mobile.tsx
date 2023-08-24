import { General } from "@/components/index";
import { useState } from "react";
import Logo from "../../logo";
import { MenuItem } from "./desktop";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-20 flex h-[100vh] w-[100vw] transform transition-all peer-checked:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-[100vw]"
        } duration-150`}
      >
        <div className="flex h-full w-[50vw] flex-col items-start bg-white px-8 py-10">
          <Logo />
          <div className="flex w-full flex-col items-start gap-y-9 pr-12 pt-24">
            <MenuItem text="Features" />
            <MenuItem text="Courses" />
            <a href="https://github.com/jimtin/strategy-builder" target="_blank" rel="noreferrer">

            <img
              className="h-8 cursor-pointer object-cover"
              loading="lazy"
              src="/assets/github.png"
            />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">

            <General.Button.Primary className="!px-6">
              <img
                className="h-9 w-full cursor-pointer object-fill"
                loading="lazy"
                src="/assets/discord.png"
              />
            </General.Button.Primary>
            </a>
          </div>
        </div>
        <div
          className="h-full w-[50vw] bg-black opacity-25"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className="relative flex justify-center pb-2 pt-8 max-lg:px-24 max-sm:px-12">
        <div className="absolute left-10 top-8">
          <i
            className="fa-solid fa-bars cursor-pointer text-[1.5rem] text-[#283845]"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>

        <Logo />
      </div>
    </>
  );
};

export default Mobile;
