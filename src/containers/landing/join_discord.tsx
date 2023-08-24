const JoinDiscord = () => {
  return (
    <div className="w-full px-36 max-2xl:px-28 max-lg:px-24 max-md:px-16">
      <div className="flex flex-col items-center space-y-10 rounded-3xl border border-[#CCC] px-28 py-16 max-md:px-12 max-md:text-center max-sm:px-10">
        <h1 className="font-montserrat text-[2.8rem] font-bold leading-none text-[#283845] max-md:leading-tight max-sm:text-[2.3rem]">
          Join the Discord Community
        </h1>
        <div className="font-poppins text-center text-lg font-normal leading-none tracking-tight text-[#303030]">
          Be an Early Member.
        </div>
        <div className="flex justify-center">
        <a href="https://discord.gg/2vRM6eZtCw" target="_blank" rel="noreferrer">

          <div className="flex items-center justify-center gap-x-6 rounded-2xl border-[2px] border-[#283845] bg-white px-16 py-4 max-sm:px-8">

            <div className="font-poppins text-[1.375rem] font-medium tracking-wide text-[#283845]">
              Join us on
            </div>

            <img
              src="/assets/discord_colored.png"
              className="h-8 w-auto object-cover"
              loading="lazy"
            />
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinDiscord;
