import Image from "next/image";
import logo from "../assets/Logo.png"

export default function Navbar() {
    return (
      <>
        <div className="w-[1920px] h-[92px] p-[16px_220px_16px_220px] bg-[#043873] flex justify-between items-center">

            {/* logo */}
            <div className="w-[191px] h-[34px]">
                <Image src={logo} alt="" />
            </div>

            {/* links */}
            <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                <div>
                <ul className="w-[549px] h-[23px] text-white flex justify-between ">
                    <li className="hover:text-blue-400 cursor-pointer">Products</li>
                    <li className="hover:text-blue-400 cursor-pointer">Solutions</li>
                    <li className="hover:text-blue-400 cursor-pointer">Resources</li>
                    <li className="hover:text-blue-400 cursor-pointer">Pricing</li>
                </ul>
            </div>

            <div className="w-[126px] h-[60px] cursor-pointer hover:bg-red-300">
                <button className="w-[126px] h-[60px] rounded-lg bg-[#FFE492] hover:text-white hover:bg-red-300">Login</button>
            </div>
            </div>

        </div>
      </>
    );
  }
  