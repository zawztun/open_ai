import { BsChatLeft } from "react-icons/bs";
import type { Prompt } from "../../App";

interface ModalProps {
  data: Prompt[];
  openModal: () => void;
}

const Modal = ({ data, openModal }: ModalProps) => {
  return (
    <div className="fixed w-full h-full px-2 lg:hidden bg-bg-side ">
      <div className="w-full mx-auto rounded-md ">
        <div className="flex flex-col w-full gap-2 py-2 text-white rounded-md pr-auto lg:mr-auto">
          <div className="flex items-center justify-between gap-2 ">
            <div className="flex w-full gap-2 py-4 border border-gray-600 rounded-md ">
              <span className="px-2">+</span>
              <span>New Chat</span>
            </div>
            <button className="p-4 border" onClick={openModal}>
              X
            </button>
          </div>
          <div>
            <h2 className="text-[12px] text-gray-400 ">Today</h2>
          </div>

          {data.map((prompt, idx) => (
            <div key={idx} className="flex items-center py-2 ">
              <span className="flex items-center px-2 ">
                <BsChatLeft />
              </span>
              <span>{prompt.question}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
