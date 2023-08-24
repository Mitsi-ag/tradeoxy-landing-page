import { ChangeEventHandler } from "react";

interface IProps {
  hintText: string;
  className?: string;
  background?: string;
  borderRadius?: string;
  border?: string;
  value?: any;
  onChange?: ChangeEventHandler;
}

const Primary = (props: IProps) => {
  const {
    hintText,
    background,
    borderRadius,
    border,
    className,
    onChange,
    value,
  } = props;

  return (
    <div
      className={`h-auto w-full ${background || "bg-white"} ${
        borderRadius || "rounded-2xl"
      } ${
        border || "border-[1.2px] border-[#D0D0D0]"
      } flex items-center justify-start`}
    >
      <input
        placeholder={hintText}
        value={value}
        onChange={onChange}
        className={`h-[80%] w-full border-none shadow-none outline-0 focus:border-none focus:outline-0 ${className}`}
      />
    </div>
  );
};

export default Primary;
