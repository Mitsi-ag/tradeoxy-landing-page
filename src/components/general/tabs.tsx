import { useState } from "react";

interface IProps {
  items: string[];
}

const Tabs = (props: IProps) => {
  const { items } = props;
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <div className="flex w-full flex-wrap items-stretch justify-center gap-x-6 max-lg:items-center max-lg:gap-x-4 max-lg:gap-y-4">
      {items.map((i, k: number) => (
        <div
          key={k}
          onClick={() => setActiveTabId(k)}
          className={`inline-flex h-full w-max cursor-pointer justify-center rounded-md border border-stone-300 px-5 py-3 ${
            activeTabId === k ? "bg-[#283845]" : "bg-transparent"
          }`}
        >
          <p
            className={`text-[0.975rem] font-normal capitalize ${
              activeTabId === k ? "text-white" : "text-[#818C96]"
            }`}
          >
            {i}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
