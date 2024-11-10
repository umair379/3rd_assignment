export default function Hero() {
    return (
      <>
        <div className="w-[2035px] h-[829px] p-[140px_220px_140px_220px] bg-[#043873] flex items-center">
            <div className="w-[656px] h-[361px] flex flex-col gap-6 ">
                <div className="w-[656px] h-[238px] flex flex-col gap-8">
                    <h2 className="w-[656px] h-[154px] text-white text-[64px] font-bold">
                        Get More Done with whitepace
                    </h2>
                    <p className="w-[656px] h-[60px] text-white font-extralight text-[18px]">
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                </div>

                <div className="w-[219px] h-[63px] p-5 rounded-lg bg-[#4F9CF9] text-white cursor-pointer hover:bg-red-300">
                    <button>Try Whitepace free</button>
                </div>
            </div>

            <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>

        </div>
      </>
    );
  }
  