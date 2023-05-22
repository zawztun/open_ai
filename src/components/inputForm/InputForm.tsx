import { Dispatch, SetStateAction } from "react";
import { BsSendFill } from "react-icons/bs";

interface InputFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  keyword: string;
  inputRef: React.RefObject<HTMLInputElement>;
  setKeyWord: Dispatch<SetStateAction<string>>;
  loading: boolean;
}

const InputForm = ({
  handleSubmit,
  keyword,
  inputRef,
  setKeyWord,
  loading,
}: InputFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between w-full px-4 py-3 text-white border-gray-600 rounded-md bg-bg-input pr-auto lg:mr-auto"
    >
      <input
        value={keyword}
        required
        onChange={(e) => setKeyWord(e.target.value.trim())}
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
  );
};

export default InputForm;
