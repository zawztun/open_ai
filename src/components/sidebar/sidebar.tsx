import { SiOpenai } from "react-icons/si";
import type { Prompt } from "../../App";
import { BsChatLeft } from "react-icons/bs";

interface SidebarProps {
  handleNewChat: () => void;
  data: Prompt[];
}

const Sidebar = ({ data, handleNewChat }: SidebarProps) => {
  return (
    <div className="hidden lg:grid grid-rows-[80%_20%] w-full h-full bg-bg-side px-2 ">
      <div className="w-full mx-auto overflow-y-auto rounded-md">
        <div className="flex flex-col w-full gap-2 py-2 text-white rounded-md pr-auto lg:mr-auto">
          <div
            className="flex gap-2 py-2 border border-gray-600 cursor-pointer"
            onClick={handleNewChat}
          >
            <span className="px-2">+</span>
            <span>New Chat </span>
          </div>
          <div>
            <h2 className="text-[12px] text-gray-400 py-2">Today</h2>
          </div>
          {data.map((prompt, idx) => (
            <div key={idx} className="flex items-center py-1 overflow-hidden">
              <span className="flex items-center px-2 ">
                <BsChatLeft />
              </span>
              <span className="line-clamp-1">{prompt.question}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 px-4 py-4 border-t border-gray-600 ">
        <span>
          <SiOpenai className="w-[25px] h-[25px] bg-green-500" />
        </span>
        <span>zzt.nyc@gmail.com</span>
      </div>
    </div>
  );
};

export default Sidebar;
