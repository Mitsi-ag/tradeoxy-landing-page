import Carousel from "better-react-carousel";

interface IProps {
  gap?: number;
  rows?: number;
  cols?: number;
  loop?: boolean;
  fullWidth?: boolean;
  hideArrow?: boolean;
  responsiveLayout?: {
    breakpoint: number;
    cols?: number;
    rows?: number;
    gap?: number;
    loop?: boolean;
    autoplay?: number;
  }[];
  arrowPosition?: {
    left?: string;
    right?: string;
  };
  showDots?: boolean;
  autoplayInMs?: number;
  items: JSX.Element[];
  type?: "dot" | "arrow";
}

const CarouselRC = (props: IProps) => {
  const {
    items,
    type,
    rows,
    cols,
    gap,
    loop,
    arrowPosition,
    responsiveLayout,
    autoplayInMs,
    hideArrow,
    showDots,
    fullWidth,
  } = props;

  return (
    <div
      className={`relative h-full ${
        type === "arrow" ? (fullWidth ? "w-full" : "w-10/12") : "w-full"
      }`}
    >
      <Carousel
        showDots={showDots}
        cols={cols}
        rows={rows}
        dotColorActive={"#303030"}
        hideArrow={hideArrow}
        autoplay={autoplayInMs}
        loop={loop}
        mobileBreakpoint={0}
        responsiveLayout={responsiveLayout}
        gap={gap}
        arrowLeft={
          <div
            className={`absolute top-0 ${
              arrowPosition?.left || "left-[-5%]"
            } z-10 flex h-full w-[3rem] flex-col justify-center`}
          >
            <div className="inline-flex h-12 w-12  cursor-pointer items-center justify-center rounded-lg bg-white p-2 drop-shadow-lg">
              <i className="fa-solid fa-chevron-left text-[#999999]"></i>
            </div>
          </div>
        }
        arrowRight={
          <div
            className={`absolute top-0 ${
              arrowPosition?.right || "right-[-5%]"
            } flex h-full w-[3rem] flex-col justify-center`}
          >
            <div className="inline-flex h-12 w-12  cursor-pointer items-center justify-center rounded-lg bg-white drop-shadow-lg">
              <i className="fa-solid fa-chevron-right text-[#999999]"></i>
            </div>
          </div>
        }
      >
        {items.map((i, k) => (
          <Carousel.Item
            key={k}
            style={{
              margin: 0,
            }}
          >
            {i}
          </Carousel.Item>
        ))}
      </Carousel>

      <style>
        {`
            .Carousel__RailWrapper-sc-hyhecw-1 {
              margin: 0;
            }

            .Carousel__Dots-sc-hyhecw-4 {
              position: absolute;
              bottom: 20px;
            }
            
            `}
      </style>
    </div>
  );
};

export default CarouselRC;
