import Navebar from "./components/Navebar";

const Header = () => {
  return (
    <>
      <div className="hidden md:flex justify-between items-center py-[20px] px-[30px]">
        <div className=" w-full fontNumber text-center md:text-left text-[#0B89CA] lg:text-[32px] md:text-[28px] font-normal ">
          BRICKLAYER
        </div>
        <div className=" w-full md:block hidden ">
          <Navebar />
        </div>
      </div>
    </>
  );
};
export default Header;
