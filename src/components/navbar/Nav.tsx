import { HiBars3 } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";

interface NavbarProps {
  openModal: () => void;
}

const Navbar = ({ openModal }: NavbarProps) => {
  return (
    <div className="flex justify-between items-center p-2 lg:hidden border-b min-h-[70px]">
      <span onClick={openModal}>
        <HiBars3 className="w-[35px] h-[35px]" />
      </span>
      <h2 className="text-xl">New Chat</h2>
      <span>
        <AiOutlinePlus className="w-[35px] h-[35px]" />
      </span>
    </div>
  );
};
export default Navbar;
