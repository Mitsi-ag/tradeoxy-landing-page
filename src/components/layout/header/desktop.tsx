import { General } from "@/components/index";
import Logo from "../../logo";

const Desktop = () => {
  return (
    <div className="flex justify-between px-36 py-6 max-2xl:px-28 max-lg:px-24 max-sm:px-12">
      <div className="hidden max-sm:block">
        <i className="fa-solid fa-bars text-[1.5rem] text-[#283845]"></i>
      </div>
      <Logo />
      <div className="flex items-center justify-end gap-x-12 max-sm:hidden">

        <a href="https://github.com/jimtin/strategy-builder" target="_blank" rel="noreferrer">
        <img
          className="h-6 w-auto cursor-pointer object-cover"
          loading="lazy"
          src="/assets/github.png"
        />
        </a>
        <a href="https://discord.com" target="_blank" rel="noreferrer">
        <General.Button.Primary>
          <img
            className="h-6 w-auto scale-105 cursor-pointer object-cover"
            loading="lazy"
            src="/assets/discord.png"
          />
        </General.Button.Primary>
        </a>
      </div>
    </div>
  );
};

export const MenuItem = (props: { text: string }) => {
  const { text } = props;
  return (
    <div className="font-poppins cursor-pointer text-xl font-normal tracking-tight text-[#303030] max-md:text-[1.65rem]">
      {text}
    </div>
  );
};

export default Desktop;
