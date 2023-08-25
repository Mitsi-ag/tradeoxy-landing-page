import { DataEntry, General } from "@/components/index";
import { Api, Helpers } from "@/utils";
import { useState } from "react";
import toast from "react-hot-toast";

const Banner = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendSlackNotification = async () => {
    if (Helpers.Email.isEmailValid(email)) {
      setIsLoading(true);
      await Api.Slack.sendNotification(email);
      setEmail("");
      setIsLoading(false);
    } else toast.error("Email not valid", { style: { fontSize: "1.5rem" } });
  };

  return (
    <div className="flex h-max w-full items-stretch justify-between space-x-28 max-lg:space-x-16 max-md:px-16">
      <div className="flex h-auto w-1/2 flex-col justify-center space-y-7 pl-36 max-2xl:pl-28 max-lg:pl-24 max-md:mt-12 max-md:w-full max-md:items-center max-md:pl-0">
        <div className="flex flex-col space-y-5 max-md:items-center">
          <h1 className="font-montserrat text-[3.5rem] font-normal leading-none text-slate-800 max-md:text-[3.15rem]">
            Democratizing
          </h1>
          <h1 className="font-montserrat text-[3.5rem] font-semibold leading-none text-teal-500 max-md:whitespace-nowrap max-md:text-[3.15rem]">
            Advanced Trading.
          </h1>
        </div>
        <p className="font-poppins w-[85%] text-[1.375rem] text-[#303030] max-md:w-[90%] max-md:text-center">
          Experience modern trading automation that works seamlessly across all
          devices. 
          <a
            href="https://traderbotdemo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#31bcb4" }}
            className="italic"
          >
             View Demo Now.
          </a>
        </p>

        <div className="flex w-[70%] max-lg:w-[80%] max-md:w-[90%] max-md:justify-center">
          <DataEntry.Input.Primary
            border="border-[1.5px] border-[#D0D0D0]"
            borderRadius="rounded-xl"
            hintText="Email Address"
            className="font-poppins py-4 pl-7 text-lg placeholder:text-[#D0D0D0] max-md:pr-12"
            value={email}
            onChange={(e: any) => setEmail(e.target?.value)}
          />
          <General.Button.Primary
            className="-ml-8 !rounded-xl !bg-[#283845] !px-16 !py-[1.125rem]"
            isLoading={isLoading}
            onClick={sendSlackNotification}
          >
            <p className="font-poppins whitespace-nowrap text-lg font-normal tracking-tight text-white">
              Get Started
            </p>
          </General.Button.Primary>
        </div>
        <div className="flex w-[70%] items-center justify-between pt-6 max-lg:w-[80%] max-md:w-[90%] max-sm:w-[100%]">
          <div className="inline-flex h-max w-max items-center justify-center gap-x-4">
            <div className="font-opensans text-[2.25rem] font-bold text-[#283845]">
              10000+
            </div>
            <div className="font-opensans text-base font-normal text-[#969696]">
              Happy Predicted
              <br />
              Customers
            </div>
          </div>
          <div className="h-full w-[1px] bg-[#9D9D9D] opacity-60 max-sm:hidden"></div>
          <div className="inline-flex h-max w-max items-center justify-center gap-x-4">
            <div className="font-opensans text-[2.25rem] font-bold text-[#283845]">
              $1M+
            </div>
            <div className="font-opensans text-base font-normal text-[#969696]">
              Upcoming <br />
              transactions
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-1/2 pl-8 max-lg:pl-0 max-md:hidden">
        <img
          className="h-auto w-full rounded-l-3xl object-cover drop-shadow-2xl"
          src="/assets/banner.jpg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Banner;
