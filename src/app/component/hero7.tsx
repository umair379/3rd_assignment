import Image from "next/image";
import logo from "../assets/Logo.png"

export default function Hero7() {
    return (
      <>
        <div className="w-[1920px] h-[461px] p-[140px_220px_32px_220px] bg-[#043873] flex items-center">
            <div className="w-[1480px] h-[289px] flex flex-col gap-[44px]">
                <div className="w-[1480px] h-[169px]  text-white  font-inter flex gap-[100px]">
                {/* 1st */}
                    <div className="w-[295px] h-[169px] flex flex-col gap-[15px]">
                        <Image src={logo} alt="" height={100} width={200} />
                        <p className="w-[240px] h-[120px] text-[18px] font-extralight text-[#cecbcb]">
                            whitepace was created for the new ways we live and work. We make a better workspace around the world
                        </p>
                    </div>
                {/* 2nd */}
                    <div className="w-[295px] h-[127px] flex flex-col gap-[15px]">
                        <p className="w-[68px] h-[22px] text-[18px] font-bold">
                            Product
                        </p>
                        <p className="w-[70px] h-[20px] text-[#8d8a8a] ">
                            Overview
                        </p>
                        <p className="w-[50px] h-[20px] text-[#cecbcb]">
                            Pricing
                        </p>
                        <p className="w-[177px] h-[20px] text-[#cecbcb]">
                            Customer stories
                        </p>
                    </div>
                {/* 3rd */}
                    <div className="w-[295px] h-[130px] flex flex-col gap-[16px]">
                        <p className="w-[91px] h-[22px] text-white text-[16px] font-bold">
                            Resources
                        </p>
                        <p className="w-[33px] h-[20px] text-[#cecbcb]">
                            Blog
                        </p>
                        <p className="w-[128px] h-[20px] text-[#cecbcb]">
                            Guides & tutorials
                        </p>
                        <p className="w-[130px] h-[20px] text-[#cecbcb]">
                            Help center
                        </p>
                    </div>
                {/* 4rt */}
                <div className="w-[295px] h-[130px] flex flex-col gap-[16px]">
                        <p className="w-[83px] h-[22px] text-white text-[16px] font-bold">
                            Company
                        </p>
                        <p className="w-[66px] h-[20px] text-[#cecbcb]">
                            About us
                        </p>
                        <p className="w-[62px] h-[20px] text-[#cecbcb]">
                            Careers
                        </p>
                        <p className="w-[99px] h-[20px] text-[#cecbcb]">
                            Media kits
                        </p>
                    </div>


                </div>
                    <div className="w-1480px h-[1px] bg-slate-600"></div>
                    <div className="w-[1480px] h-[20px] mt-[-20px] flex justify-center">
                        <div className="w-[169px] h-[20px] text-white text-[16px] font-inter flex gap-[60px]">
                            <p>
                                ©2021 Whitepace LLC.
                            </p>
                        </div>
                    </div>

            </div>
        </div>
      </>
    );
  }
  