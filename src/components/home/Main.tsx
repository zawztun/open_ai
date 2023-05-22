import { FiSun } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import type { Prompt } from "../../App";
import { IoFlashOutline } from "react-icons/io5";
import { BsExclamationTriangle } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { FaRobot } from "react-icons/fa";

interface MainProps {
  data: Prompt[];
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  bottomRef: React.RefObject<HTMLDivElement>;
}

const lists = [
  {
    id: 1,
    text: `"Explain the quantum computing in simple terms"`,
    icon: <BsArrowRight className="inline" />,
  },
  {
    id: 2,
    text: `"Got any creative ideas for a 10 year old’s
    birthday?"`,
    icon: <BsArrowRight className="inline" />,
  },
  {
    id: 3,
    text: `"How do I make an HTTP request in Javascript?"`,
    icon: <BsArrowRight className="inline" />,
  },
];

const list1 = [
  { id: 1, text: "Remembers what user said earlier in the conversation" },
  {
    id: 2,
    text: "Allows user to provide follow-up corrections",
  },
  { id: 3, text: "Trained to decline inappropriate requests " },
];

const list2 = [
  { id: 1, text: "May occasionally generate incorrect information" },
  {
    id: 2,
    text: "May occasionally produce harmful instructions or biased content",
  },
  { id: 3, text: "Limited knowledge of world and events after 2021" },
];

const Main = ({ data, setKeyword, bottomRef }: MainProps) => {
  return (
    <div className="grid w-full overflow-y-auto bg-bg-theme lg:mx-auto scroll-smooth">
      {data.length === 0 && (
        <div className="px-[10%] lg:px-[20%]">
          <div className="flex items-center justify-center py-8 lg:mt-16">
            <h1 className="text-4xl font-bold">ChatGPT</h1>
          </div>

          <div className=" grid items-center mx-auto min-h-[400px] w-full ">
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
              <div className="flex flex-col gap-4 ">
                <div className="flex items-center justify-center gap-2 lg:flex-col gap">
                  <span>
                    <FiSun className="w-[20px] h-[20px]" />
                  </span>
                  <h2 className="text-xl">Examples</h2>
                </div>

                {lists.map((list) => (
                  <div
                    key={list.id}
                    className="flex flex-col gap-2 text-sm leading-6 "
                  >
                    <div className="p-2 text-center rounded-md cursor-pointer bg-bg-input hover:bg-black">
                      <div
                        onClick={() => setKeyword(list.text)}
                        className="flex"
                      >
                        <span>
                          {list.text} {list.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center gap-2 lg:flex-col">
                  <span>
                    <IoFlashOutline className="w-[20px] h-[20px]" />
                  </span>
                  <h2 className="text-xl">Capabilities</h2>
                </div>
                {list1.map((list) => (
                  <div
                    key={list.id}
                    className="flex flex-col gap-2 text-sm leading-6 text-center "
                  >
                    <div className="p-2 rounded-md bg-bg-input">
                      <p>{list.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center gap-2 lg:flex-col">
                  <span>
                    <BsExclamationTriangle className="w-[20px] h-[20px]" />
                  </span>
                  <h2 className="text-xl">Limitations</h2>
                </div>
                {list2.map((list) => (
                  <div
                    key={list.id}
                    className="flex flex-col gap-2 text-sm leading-6 text-center "
                  >
                    <div className="p-2 rounded-md bg-bg-input">
                      <p onClick={() => setKeyword(list.text)}>{list.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-8 pt-8 ">
        {data.map((prompt, idx) => (
          <div key={idx} className="flex flex-col gap-2 ">
            <div className="flex lg:px-[20%] items-center p-4 ">
              <span className="flex p-2 text-white bg-green-900 rounded-full">
                <BsFillPersonVcardFill />
              </span>
              <p className="flex items-center justify-center px-8">
                {prompt.question}
              </p>
            </div>

            <div className="flex bg-bg-ans lg:px-[20%] items-center p-4">
              <div>
                <span className="flex p-2 text-white bg-red-600 rounded-full">
                  <FaRobot />
                </span>
              </div>
              <p className="flex items-center justify-center px-8 py-4">
                <TypeAnimation
                  sequence={[1000, prompt.answer]}
                  wrapper="span"
                  speed={20}
                  cursor={true}
                  omitDeletionAnimation={true}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div ref={bottomRef} className="py-24 mt-24"></div>
    </div>
  );
};

export default Main;
