import Image from "next/image";
import apple from "../assets/Apple.png"
import microsoft from "../assets/microsoft.png"
import stack from "../assets/Slack.png"
import goo from "../assets/Google.png"

export default function Hero6() {
    return (
      <>
        <div className="w-[1920px] h-[538px] p-[140px_220px_140px_220px] bg-white flex flex-col gap-[100px] items-center">
            <h1 className="w-[1482px] hh-[87px] text-[72px] font-bold text-center font-inter">
                Our sponsors
            </h1>
            <div className="w-[1482px] h-[71px] flex justify-between">
                <Image src={apple} alt="" />
                <Image src={microsoft} alt="" />
                <Image src={stack} alt="" />
                <Image src={goo} alt="" />
            </div>
        </div>
      </>
    );
  }
  