import CarouselRC from "@/components/general/carousel";

const MeetTeam = () => {
  return (
    <div className="flex w-full flex-col items-center space-y-20 px-36 max-2xl:px-28 max-lg:px-24 max-md:space-y-12 max-md:px-16">
      <h1 className="font-montserrat text-center text-[2.8rem] font-bold leading-none text-[#283845] max-md:text-[2.3rem]">
        Meet Our Team.
      </h1>
      <div className="flex w-[40%] justify-center">
        <CarouselRC
          cols={2}
          rows={1}
          fullWidth={true}
          gap={32}
          responsiveLayout={[
            {
              breakpoint: 600,
              cols: 1,
            },
            {
              breakpoint: 800,
              cols: 2,
            },
            {
              breakpoint: 1000,
              cols: 3,
            },
          ]}
          items={[
            <MenuItem
              image="/assets/team/06.png"
              name="James Hinton"
              designation=""
              link="https://www.linkedin.com/in/jameshinton84/"
            />,
            <MenuItem
              image="/assets/team/05.png"
              name="Mitaanshu Agarwal"
              designation=""
              link="https://www.linkedin.com/in/mitaanshu-agarwal/"
            />,

          ]}
        />
      </div>
    </div>
  );
};

const MenuItem = (props: {
  image: string;
  name: string;
  designation: string;
  link: string
}) => {
  const { image, name, designation, link } = props;

  return (
    <div className="flex h-auto w-full flex-col items-center justify-start space-y-8 rounded-3xl border-[2px] border-[#EBEBEB] py-6 pt-3">

      <div className="aspect-square w-[80%]">
      <a href={link} target="_blank" rel="noreferrer">

        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src={image}
        />
        </a>
      </div>
      <div className="flex flex-col items-center space-y-4">
      <a href={link} target="_blank" rel="noreferrer">

        <p className="font-poppins w-max text-center text-lg font-semibold leading-none text-[#282828]">
          {name}
        </p>
        <p className="font-poppins text-center text-sm font-normal leading-none text-[#3E3E59]">
          {designation}
        </p>
        </a>
      </div>
      {/* <div className="grid w-[80%] grid-cols-2 justify-between">
        <img
          src="/assets/team/icons/twitter.png"
          loading="lazy"
          className="h-[2.375rem] w-[2.375rem] rounded-full object-cover"
        /> */}
        {/* <img
          src="/assets/team/icons/tiktok.png"
          loading="lazy"
          className="h-[2.375rem] w-[2.375rem] rounded-full object-cover"
        /> */}
        {/* <img
          src="/assets/team/icons/linkedin.png"
          loading="lazy"
          className="h-[2.375rem] w-[2.375rem] rounded-full object-cover"
        /> */}
        {/* <img
          src="/assets/team/icons/mail.png"
          loading="lazy"
          className="h-[2.375rem] w-[2.375rem] rounded-full object-cover"
        /> */}
      </div>
    // </div>
  );
};

export default MeetTeam;
