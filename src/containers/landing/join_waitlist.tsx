import { DataEntry, General } from "@/components/index";
import { Api, Helpers } from "@/utils";
import { useState } from "react";
import toast from "react-hot-toast";

const JoinWaitlist = () => {
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
    <div className="w-full px-36 max-lg:px-24 max-md:px-16">
      <div className="flex flex-col items-center space-y-10 rounded-3xl border border-[#CCC] px-28 py-16 max-md:px-6 max-md:text-center">
        <h1 className="font-montserrat text-[2.8rem] font-bold leading-none text-[#283845] max-md:text-[2.3rem] max-md:leading-tight">
          Join Our Waitlist
        </h1>
        <div className="font-poppins text-center text-lg font-normal leading-none tracking-tight text-[#303030]">
          Subscribe for EARLY Access.
        </div>
        <div className="flex w-[40%] max-lg:w-[50%] max-md:w-[80%] max-md:flex-col max-md:gap-y-2">
          <DataEntry.Input.Primary
            border="border-[1.5px] border-[#D0D0D0]"
            borderRadius="rounded-xl"
            hintText="Email Address"
            className="font-poppins px-7 py-4 text-lg placeholder:text-[#D0D0D0] max-md:w-full"
            value={email}
            onChange={(e: any) => setEmail(e.target?.value)}
          />
          <General.Button.Primary
            isLoading={isLoading}
            onClick={sendSlackNotification}
            className="-ml-8 !rounded-xl !bg-[#283845] !px-16 !py-[1.125rem] max-md:ml-0"
          >
            <p className="font-poppins whitespace-nowrap text-lg font-normal tracking-tight text-white">
              Subscibe
            </p>
          </General.Button.Primary>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
