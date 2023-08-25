const BuildTestOptimize = () => {
  return (
    <div className="flex flex-col items-center justify-start space-y-16 px-16">
      <h1 className="font-montserrat text-center text-[2.8rem] font-bold text-[#283845] max-md:text-[2.3rem] max-sm:text-center max-sm:leading-tight">
        Build, Test, Optimize:
        <br />
        Straight from your browser
      </h1>
      <div className="relative flex h-max w-[42%] max-lg:w-[46%] max-md:w-[70%] max-sm:w-[90%]">
        <img
          src="/assets/discover.png"
          className="z-0 h-auto w-full scale-105 object-cover max-sm:scale-125"
          loading="lazy"
        />
        <div className="absolute left-[-12%] top-[15%] z-10">
          <TagInfo
            image="/assets/discover/citizens.png"
            text="A trading community build just for you"
          />
        </div>
        <div className="absolute left-[-3%] top-[72%] z-10">
          <TagInfo
            image="/assets/discover/performance.png"
            text="Hyper-scale optimization"
          />
        </div>
        <div className="absolute right-[-3%] top-[5%] z-10 max-md:top-[-5%]">
          <TagInfo
            image="/assets/discover/currency.png"
            text="Crypto, Stocks, Forex"
          />
        </div>
        <div className="absolute right-[-15%] top-[45%] z-10">
          <TagInfo
            image="/assets/discover/indicator.png"
            text="World class indicators"
          />
        </div>
        <div className="absolute right-0 top-[85%] z-10 max-md:top-[95%]">
          <TagInfo
            image="/assets/discover/stratergy.png"
            text="Enhance your strategy's performance"
          />
        </div>
      </div>
    </div>
  );
};

const TagInfo = (props: { image: string; text: string }) => {
  const { image, text } = props;

  return (
    <div className="inline-flex h-max w-max flex-col items-start justify-start gap-2 rounded-[6rem] bg-white py-2 pl-4 pr-8 drop-shadow-xl">
      <div className="inline-flex items-center justify-start gap-x-3">
        <img className="h-8 w-8 object-cover" src={image} />
        <div className="font-poppins text-[0.925rem] font-medium text-[#283845]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default BuildTestOptimize;
