const UnmatchedToolsets = () => {
  return (
    <div className="flex w-full flex-col space-y-10 px-36 max-2xl:px-28 max-lg:px-24 max-md:px-16">
      <h1 className="font-montserrat text-center text-[2.8rem] font-bold leading-none text-[#283845] max-md:text-[2.3rem] max-md:leading-tight">
        Unmatched Toolsets for Intelligent Trading.
      </h1>
      <p className="font-poppins text-center text-lg font-normal leading-none tracking-tight text-[#303030] max-md:leading-tight">
        Discover a new era of trading with our cutting-edge AI Features.
      </p>
      <div className="grid grid-cols-4 justify-between gap-8 pt-12 max-xl:grid-cols-3 max-md:grid-cols-1">
        <MenuItem text="AI Market Insights" image="/assets/toolsets/01.png" />
        <MenuItem text="Smart Trading Bots" image="/assets/toolsets/02.png" />
        <MenuItem
          text="Stratergy Custmization"
          image="/assets/toolsets/03.png"
        />
        <MenuItem
          text="Backtesting and Analytics"
          image="/assets/toolsets/04.png"
        />
        <MenuItem
          text="Stratergy Customization"
          image="/assets/toolsets/05.png"
        />
        <MenuItem
          text="User-Friendly Interface"
          image="/assets/toolsets/06.png"
        />
        <MenuItem text="AI Market Insights" image="/assets/toolsets/07.png" />
        <MenuItem
          text="Risk Management Tools"
          image="/assets/toolsets/08.png"
        />
      </div>
    </div>
  );
};

const MenuItem = (props: { image: string; text: string }) => {
  const { image, text } = props;

  return (
    <div
      className="inline-flex h-auto w-full flex-col items-start justify-center gap-2 rounded-3xl bg-white p-6 shadow"
      style={{ boxShadow: "0px 8px 32px 0px rgba(0, 188, 180, 0.12)" }}
    >
      <div className="inline-flex items-center justify-center gap-x-5 self-stretch">
        <div className="h-[4.5rem] w-[4.5rem]">
          <img
            src={image}
            className="h-full w-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="font-poppins shrink grow basis-0 text-[1.12rem] font-medium tracking-tight text-[#283845]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default UnmatchedToolsets;
