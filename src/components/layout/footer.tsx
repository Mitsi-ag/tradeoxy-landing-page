import { Api, Helpers } from "@/utils";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { DataEntry, General } from "../index";
import Logo from "../logo";

const Footer = () => {
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

  const subscribeNow = useMemo(() => {
    return (
      <General.Button.Primary
        isLoading={isLoading}
        onClick={sendSlackNotification}
        className="bg-[#00BCB4] !px-12 !py-[1.4rem]"
      >
        <div className="font-poppins whitespace-nowrap text-center text-xl font-normal text-white">
          Subcribe Now
        </div>
      </General.Button.Primary>
    );
  }, [isLoading, sendSlackNotification]);

  return (
    <div className="flex flex-col items-start space-y-16 pb-16">
      <div className="relative flex w-full flex-col">
        <div className="z-0">
          <img
            loading="lazy"
            src="/assets/footer-shape.png"
            className="h-auto w-full scale-y-[.85] object-cover max-md:scale-y-150"
          />
        </div>
        <div className="z-10 -mt-[14%] flex px-36 max-2xl:px-28 max-lg:px-24 max-sm:px-8">
          <div className="flex w-full items-center justify-between rounded-xl bg-[#283845] px-24 py-20 max-lg:flex-col max-lg:items-center max-lg:gap-y-8 max-lg:px-0 max-md:py-16">
            <div className="font-montserrat text-4xl font-semibold text-white max-md:text-[2.1rem]">
              Try Auto-Trade Today
            </div>
            <div className="flex w-[44%] rounded-lg bg-white px-7 py-5 max-lg:flex-col max-md:w-[80%] max-md:items-center max-md:gap-y-6">
              <DataEntry.Input.Primary
                hintText="Enter your email"
                border="border-none"
                className="font-poppins text-xl text-[#2B3D51] max-md:w-full"
                value={email}
                onChange={(e: any) => setEmail(e.target?.value)}
              />
              <div className="hidden lg:block">{subscribeNow}</div>
            </div>
            <div className="hidden w-[44%] max-lg:-mt-3  max-lg:block max-md:w-[80%]">
              {subscribeNow}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-max w-full items-start justify-between px-36 max-2xl:px-28 max-lg:px-24 max-md:flex-col max-md:items-center max-md:gap-y-6">
        <div className="inline-flex w-max items-start justify-start gap-x-12">
          <div className="font-poppins cursor-pointer text-xl font-medium text-[#283845]">
            {/* About us */}
          </div>
          <div className="font-poppins cursor-pointer text-xl font-medium text-[#283845]">
            {/* Pricing */}
          </div>
          <div className="font-poppins cursor-pointer text-xl font-medium text-[#283845]">
            {/* Our Team */}
          </div>
          <div className="font-poppins cursor-pointer text-xl font-medium text-[#283845]">
            {/* Features */}
          </div>
        </div>
        <div className="flex w-max gap-x-10">
          {/* <img
            loading="lazy"
            src="/assets/social/facebook.png"
            className="h-8 w-8 cursor-pointer object-cover"
          /> */}

          <a
            href="https://twitter.com/mitaanshu284"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src="/assets/social/twitter.png"
              className="h-8 w-8 cursor-pointer object-cover"
            />
          </a>
          <a
            href="https://github.com/jimtin/strategy-builder"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src="/assets/social/github.png"
              className="h-8 w-8 cursor-pointer object-cover"
            />
          </a>
          <a
            href="https://discord.gg/2vRM6eZtCw"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src="/assets/social/discord.png"
              className="h-8 w-8 cursor-pointer object-cover"
            />
          </a>
        </div>
      </div>
      <div className="w-full px-36 max-2xl:px-28 max-lg:px-24">
        <div className="h-[1.33px] w-full bg-[#2B3D51]" />
      </div>
      <div className="flex w-full justify-between px-36 max-2xl:px-28 max-lg:px-24 max-md:flex-col max-md:items-center max-md:gap-y-6">
        <div className="font-poppins w-max text-lg font-medium text-[#283845] opacity-75">
          © 2023 AutoTrade. All rights reserved.
        </div>
        <Logo />
        <div className="flex w-max gap-x-6">
        <a
            href="https://tradeoxyassets.blob.core.windows.net/assets/Terms%20and%20Conditions%20v1.1.pdf"
            target="_blank"
            rel="noreferrer"
          >
          <div className="font-poppins cursor-pointer text-lg font-medium text-[#283845]">
            Terms of Service
          </div>
          </a>
          <a
            href="https://tradeoxyassets.blob.core.windows.net/assets/Tradeoxy%20Privacy%20Policy%20v1.1.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="font-poppins cursor-pointer text-lg font-medium text-[#283845]">
              Privacy Policy
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
