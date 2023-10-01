import Image from "next/image";

export function Service() {
  return (
    <>
      <div className="w-full h-full py-20 bg-[#212121] flex-col justify-start items-center flex ">
        <div className="h-[1635px] flex-col justify-start items-start gap-20 flex">
          <div className="self-stretch h-[172px] flex-col justify-start items-center gap-10 flex">
            <div className="flex-col justify-start items-center flex">
              <div className="text-[#FDFDFD] text-[40px] font-bold leading-[60px] tracking-[1.60px] ">
                Service
              </div>
              <div className="text-[#CBF34D] text-base font-bold leading-6 tracking-[0.64px] ">
                事業内容
              </div>
            </div>
            <div className="w-[640px] text-[#EEEEEE] text-base font-medium leading-6 tracking-[0.64px] break-words">
              ITエンジニア教育事業・受託開発事業をはじめとし、テクノロジーを活用した各種サービスを提供しております。
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-[8px] self-stretch bg-[#CBF34D]"></div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-[#FDFDFD] text-[32px] font-bold leading-[48px] tracking-[1.28px]">
                  Education
                </div>
                <div className="text-[#FDFDFD] text-sm font-bold leading-[21px] tracking-[0.56px]">
                  ITエンジニア教育事業
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-16 flex">
              <div className="w-[960px] justify-start items-start gap-16 inline-flex">
                <Image
                  src="/Images/05.png"
                  alt="RareTECH"
                  width={400}
                  height={225}
                  style={{ borderRadius: "16px" }}
                />
                <div className="flex-1 flex-col justify-start items-start gap-10 inline-flex">
                  <div className="self-stretch h-[168px] flex-col justify-start items-start gap-6 flex">
                    <div className="text-[#FDFDFD] text-2xl font-bold leading-9 tracking-[0.96px]">
                      ITスクール
                      <br />
                      RareTECH
                    </div>
                    <div className="self-stretch text-[#EEEEEE] text-base font-medium leading-6 tracking-[0.64px] ">希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。</div>
                  </div>
                  <div className="w-[240px] px-8 py-4 bg-accent-100 rounded-full overflow-hidden justify-center items-center inline-flex">
                    <div className="flex-1 text-center text-[#212121] text-base font-bold leading-6 tracking-[0.64px]">詳しく見る</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
