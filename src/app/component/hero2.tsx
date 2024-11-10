import Image from "next/image";
import img from "../assets/image.png";

export default function Hero2() {
  return (
    <>
      <div className="w-[2035px] h-[1588px] p-[140px_220px_140px_220px] bg-white flex flex-col items-center gap-[100px]">
        <div className="w-[1480px] h-[547px] flex items-center gap-[60px]">
          <div className="w-[672px] h-[411px] flex flex-col gap-[60px] ">
            <div className="w-[672px] h-[288px] flex flex-col gap-8">
              <h2 className="w-[672px] h-[174px] text-black text-[64px] font-bold">
                Project <br />
                Management
              </h2>
              <p className="w-[672px] h-[90px] text-black font-extralight text-[18px]">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>

            <div className="w-[201px] h-[63px] p-[20px_40px_20px_40px] rounded-md bg-[#4F9CF9] text-white cursor-pointer hover:bg-red-300">
              <button>Get Started</button>
            </div>
          </div>

          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>

        <div className="w-[1480px] h-[661px] flex items-center gap-[60px]">
            <div className="w-[710px] h-[661px] border-2 border-[#A7CEFC]">
                <Image src={img} alt="" />
            </div>

            <div className="w-[670px] h-[294px] flex flex-col gap-[60px] ">
            <div className="w-[672px] h-[171px] flex flex-col gap-[2px]">
              <h2 className="w-[672px] h-[174px] text-black text-[72px] font-bold">
                Work Together
              </h2>
              <p className="w-[672px] h-[90px] text-black font-extralight text-[18px]">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>

            <div className="w-[186px] h-[63px] p-[20px_40px_20px_40px] rounded-md bg-[#4F9CF9] text-white cursor-pointer hover:bg-red-300">
              <button>Get Started</button>
            </div>
          </div>
            
        </div>
      </div>
    </>
  );
}
