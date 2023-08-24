import { General } from "@/components";
import { useMemo } from "react";

const tabs = [
  "All Programs",
  "Crypto",
  "FX Market",
  "Commodities",
  "Stocks",
  "Futures & Options",
];

const TradingCourses = () => {
  const courses = useMemo(() => {
    return [
      <CourseCard
        key={"1"}
        image="/assets/courses/01.png"
        subscribed={40}
        price="500"
        finalPrice="380"
        CourseName="Basic: Zero to hero"
      />,
      <CourseCard
        key={"2"}
        image="/assets/courses/02.png"
        subscribed={11}
        price="500"
        finalPrice="678"
        CourseName="Scalping Strategies"

      />,
      <CourseCard
        key={"3"}
        image="/assets/courses/03.png"
        subscribed={234}
        price="500"
        finalPrice="123"
        CourseName="Technical indicators"

      />,
      <CourseCard
        key={"4"}
        image="/assets/courses/04.png"
        subscribed={342}
        price="500"
        finalPrice="567"
        CourseName="Algo trading and backtesting optimisation"

      />,
    ];
  }, []);

  return (
    <div className="flex w-full flex-col items-center space-y-16 px-36 max-2xl:px-28 max-lg:px-24 max-md:px-16 max-sm:px-12">
      <h1 className="font-montserrat text-center text-[2.8rem] font-bold leading-none text-[#283845] max-md:text-[2.3rem] max-md:leading-tight">
        Our Trading Courses (Coming soon)
      </h1>
      <General.Tabs items={tabs} />
      <div className="hidden w-full max-[1400px]:block">
        <General.Carousel
          cols={3}
          items={courses}
          gap={24}
          fullWidth={true}
          responsiveLayout={[
            {
              cols: 2,
              breakpoint: 900,
            },
            {
              cols: 1,
              breakpoint: 600,
            },
          ]}
        />
      </div>
      <div className="hidden grid-cols-4 gap-x-8 min-[1400px]:grid">
        {courses}
      </div>
    </div>
  );
};

const CourseCard = (props: {
  image: string;
  subscribed: number;
  price: string;
  finalPrice: string;
  CourseName: string;

}) => {
  const { image, subscribed, price, finalPrice, CourseName } = props;

  return (
    <div
      className="mb-6 flex h-auto w-full flex-col items-center justify-start overflow-hidden rounded-3xl pb-6 max-md:ml-[2.5%] max-md:w-[95%]"
      style={{
        boxShadow: "0px 12px 40px 0px rgba(39, 56, 69, 0.05)",
      }}
    >
      <div className="relative aspect-video w-full">
        <img
          src={image}
          className="z-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-1/2 z-10 w-[85%] -translate-x-1/2 translate-y-1/2 rounded-3xl bg-white px-5 py-2 drop-shadow">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center justify-start">
              <img
                src={"/assets/courses/students/01.png"}
                className="z-[6] h-9 w-9 rounded-full object-cover"
              />
              <img
                src={"/assets/courses/students/02.png"}
                className="z-[5] -ml-3 h-9 w-9 rounded-full object-cover"
              />
              <img
                src={"/assets/courses/students/03.png"}
                className="z-[4] -ml-3 h-9 w-9 rounded-full object-cover"
              />
              <img
                src={"/assets/courses/students/04.png"}
                className="z-[3] -ml-3 h-9 w-9 rounded-full object-cover max-xl:hidden"
              />
              <img
                src={"/assets/courses/students/05.png"}
                className="z-[2] -ml-3 h-9 w-9 rounded-full object-cover"
              />
            </div>
            <div className="inline-flex w-max items-start justify-start">
              <p className="font-poppins whitespace-nowrap text-[1.07rem] font-normal leading-normal text-[#263238] max-md:text-lg">
                + {subscribed}
                &nbsp;
                <span>subscribed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[85%] flex-col items-start space-y-3 pt-16">
        <p className="font-poppins text-[0.94rem] font-normal leading-6 text-[#777795] max-md:text-lg">
        Subscribe for early access
        </p>
        <p className="font-montserrat text-xl font-extrabold tracking-wide text-slate-800 max-md:text-2xl">
          {CourseName}
        </p>
        <p className="font-poppins text-[0.94rem] font-normal leading-6 text-neutral-600 max-md:text-lg">
           Coming soon
        </p>
      </div>
      <div className="flex w-[85%] items-center justify-between pt-10">
        {/* <div className="flex items-center justify-start gap-x-3">
          <p className="font-montserrat text-[1.35rem] font-extrabold tracking-wide text-[#00BCB4] max-md:text-2xl">
            $ {finalPrice}
          </p>
          <p className="font-poppins text-[1.35rem] tracking-wide text-[#230F0F] line-through opacity-40 max-md:text-2xl">
            $ {price}
          </p>
        </div> */}
        {/* <General.Button.Primary className="!bg-[#283845] max-md:px-8 max-md:py-4">
          <p className="font-poppins text-base text-white max-md:text-[1.35rem]">
            Enroll Now
          </p>
        </General.Button.Primary> */}
      </div>
    </div>
  );
};

export default TradingCourses;
