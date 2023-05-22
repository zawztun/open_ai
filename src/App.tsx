import "./App.css";
import { useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Sidebar from "./components/sidebar/sidebar";
import Modal from "./components/navbar/Modal";
import Navbar from "./components/navbar/Nav";
import InputForm from "./components/inputForm/InputForm";
import Main from "./components/home/Main";
import Footer from "./components/footer/Footer";

export interface Prompt {
  question: string;
  answer: string;
  id: string;
}

function App() {
  const [data, setData] = useState<Prompt[]>([]);

  const [keyword, setKeyword] = useState<string>("");

  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  async function fetchPrompt(): Promise<string[]> {
    return await fetch(
      "https://baconipsum.com/api/?type=all-meat&sentences=5"
    ).then((res) => res.json());
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = await fetchPrompt();
    setLoading(false);
    const newPrompt: Prompt = {
      answer: data[0],
      question: keyword,
      id: uuidv4(),
    };

    setData((prev) => [...prev, newPrompt]);
    setKeyword("");
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNewChat = () => {
    setKeyword("");
    inputRef && inputRef.current?.focus();
    setData([]);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="bg-bg-theme grid text-gray-300 lg:grid-cols-[250px_1fr] w-full h-screen ">
        {/* <div className="hidden lg:grid grid-rows-[80%_20%] w-full h-full bg-bg-side px-2 ">
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
                <div
                  key={idx}
                  className="flex items-center py-1 overflow-hidden"
                >
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
        </div> */}
        <Sidebar data={data} handleNewChat={handleNewChat} />
        {showModal ? (
          // <div className="fixed w-full h-full px-2 lg:hidden bg-bg-side ">
          //   <div className="w-full mx-auto rounded-md ">
          //     <div className="flex flex-col w-full gap-2 py-2 text-white rounded-md pr-auto lg:mr-auto">
          //       <div className="flex items-center justify-between gap-2 ">
          //         <div className="flex w-full gap-2 py-4 border border-gray-600 rounded-md ">
          //           <span className="px-2">+</span>
          //           <span>New Chat</span>
          //         </div>
          //         <button className="p-4 border" onClick={openModal}>
          //           X
          //         </button>
          //       </div>
          //       <div>
          //         <h2 className="text-[12px] text-gray-400 ">Today</h2>
          //       </div>

          //       {data.map((prompt, idx) => (
          //         <div key={idx} className="flex items-center py-2 ">
          //           <span className="flex items-center px-2 ">
          //             <BsChatLeft />
          //           </span>
          //           <span>{prompt.question}</span>
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          // </div>
          <Modal data={data} openModal={openModal} />
        ) : (
          " "
        )}

        <div className="grid grid-rows-[80%_20%] border-gray-600 overflow-hidden">
          <div className="w-full overflow-y-auto ">
            <Navbar openModal={openModal} />

            <Main bottomRef={bottomRef} data={data} setKeyword={setKeyword} />
          </div>
          <div className="flex flex-col gap-2 w-full rounded-md lg:w-[65%] mx-auto row-start-2 ">
            {/* <form
              onSubmit={handleSubmit}
              className="flex items-center justify-between w-full px-4 py-3 text-white border-gray-600 rounded-md bg-bg-input pr-auto lg:mr-auto"
            >
              <input
                value={keyword}
                required
                onChange={(e) => setKeyword(e.target.value.trim())}
                ref={inputRef}
                type="text"
                placeholder="Send a message"
                className="w-full outline-none bg-bg-input"
              />
              {loading ? (
                <div className="duration-300 ease-in-out">...</div>
              ) : (
                <button type="submit">
                  <BsSendFill className="text-gray-400 cursor-pointer " />
                </button>
              )}
            </form>
             */}
            <InputForm
              handleSubmit={handleSubmit}
              keyword={keyword}
              setKeyWord={setKeyword}
              inputRef={inputRef}
              loading={loading}
            />

            <Footer />
            {/* 
            <div className="flex mx-auto lg:w-90">
              <span className="text-[11px]">
                Free Research Preview. ChatGPT may produce inaccurate
                information about people, places, or facts.
                <span className="underline">ChatGPT May 3 Version</span>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
