const MostTrusted = () => {
  return (
    <div className="flex items-stretch justify-between space-x-24 px-32 max-2xl:px-28 max-lg:px-24 max-md:px-16">
      <div className="flex h-auto w-1/2 flex-col justify-center space-y-8 max-md:w-full max-md:items-center">
        <h1 className="font-montserrat w-[80%] text-[2.8rem] font-bold text-[#283845] max-md:w-[95%] max-md:text-center max-md:text-[2.3rem] max-md:leading-tight">
          Gain Practical and Actionable Insights
        </h1>
        <div className="flex w-[60%] flex-col space-y-8 max-2xl:w-[64%] max-xl:w-[80%]">
          <MenuItem
            id={"01"}
            heading="Insightful Education"
            subHeading="Automate Your Trades for Efficiency and Precision."
          />
          <div className="h-[1px] w-full bg-[#E3E3E3]" />
          <MenuItem
            id={"02"}
            heading="Diversification"
            subHeading="Diversify Your Portfolio with Expert AI Insights."
          />
          <div className="h-[1px] w-full bg-[#E3E3E3]" />
          <MenuItem
            id={"03"}
            heading="Empowerment"
            subHeading="Empower Yourself with Advanced Trading Tools."
          />
        </div>
      </div>
      <div className="h-auto w-1/2 pl-8 max-md:hidden">
        <img
          className="h-auto w-full scale-y-[0.95] object-cover"
          loading="lazy"
          src="/assets/most_trusted.png"
        />
      </div>
    </div>
  );
};

const MenuItem = (props: {
  id: string;
  heading: string;
  subHeading: string;
}) => {
  const { id, heading, subHeading } = props;
  return (
    <div className="inline-flex h-max w-full items-start justify-start gap-x-8">
      <div className="font-opensans text-[1.7rem] font-semibold text-teal-200">
        {id}
      </div>
      <div className="inline-flex flex-col items-start justify-start gap-y-1.5">
        <div className="font-poppins text-[1.4rem] font-semibold text-slate-800">
          {heading}
        </div>
        <div className="font-poppins w-full text-[1.05rem] font-normal text-zinc-600">
          {subHeading}
        </div>
      </div>
    </div>
  );
};

export default MostTrusted;
