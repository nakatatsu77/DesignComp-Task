import Image from "next/image";

export function News() {
  return (
    <>
      <div className="w-full h-full py-20 bg-[#333333] justify-center items-start gap-2.5 inline-flex">
        <div className="w-[328px] h-[2166px] flex-col justify-start items-center gap-16 inline-flex md:w-[1280px] md:h-[1004px] md:gap-20">
          <div className="flex-col justify-start items-center flex">
            <div className="text-[#FDFDFD] text-[40px] font-bold font-['Inter'] leading-[60px] tracking-wider">
              News
            </div>
            <div className="text-[#CBF34D] text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
              お知らせ
            </div>
          </div>
          <div className="self-stretch h-[1898px] flex-col justify-start items-start gap-10 flex md:h-[704px]">
            <div className="wrapper self-stretch w-[328px] h-[944px] flex-col justify-start items-start gap-10 flex md:w-[1280px] md:h-[332px] md:gap-6 md:inline-flex">
              <div className="self-stretch h-[278px] flex-col justify-start items-start gap-2 flex md:flex-1 md:h-auto md:gap-4 md:inline-flex">
                <div className="self-stretch h-[185px] w-[328px] flex-col justify-start items-start gap-4 flex md:w-[411px] md:h-[231px] relative">
                  <div className="self-stretch">
                    <Image
                      src="/Images/mobile.15.png"
                      alt="News"
                      layout="fill"
                      style={{ borderRadius: "12px" }}
                      priority={true}
                      className="block md:hidden"// モバイルのみ表示
                    />
                    <Image
                      src="/Images/09.png"
                      alt="News"
                      layout="fill"
                      style={{ borderRadius: "12px" }}
                      priority={true}
                      className="hidden md:block"// PCのみ表示
                    />
                  </div>
                  <div className="px-[9px] py-1 bg-neutral-800 rounded-full justify-start items-start gap-2.5 inline-flex absolute right-[16px] top-[16px]">
                    <div className="text-[#FDFDFD] text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      その他
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start gap-1 flex md:h-[55px]">
                  <div className="self-stretch text-[#FDFDFD] text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                    2023.08.17
                  </div>
                  <div className="self-stretch text-[#FDFDFD] text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                    ホームページをリニューアルしました。
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[278px] flex-col justify-start items-start gap-2 flex md:flex-1 md:h-auto md:gap-4 md:inline-flex">
                <div className="self-stretch h-[185px] w-[328px] flex-col justify-start items-start gap-4 flex md:w-[411px] md:h-[231px] relative">
                  <div className="self-stretch">
                    <Image
                      src="/Images/10.png"
                      alt="RareTECH"
                      layout="fill"
                      style={{ borderRadius: "12px" }}
                      priority={true}
                    />
                  </div>
                  <div className="px-[9px] py-1 bg-indigo-500 rounded-full justify-start items-start gap-2.5 inline-flex absolute right-[16px] top-[16px]">
                    <div className="text-[#FDFDFD] text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide ">
                      RareTECH
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[115px] flex-col justify-start items-start gap-1 flex md:h-[85px]">
                  <div className="self-stretch text-[#FDFDFD] text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                    2023.03.01
                  </div>
                  <div className="self-stretch text-[#FDFDFD] text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                    ITスクールRareTECHより、SES・人材企業様向け研修プランをリリースしました。
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[278px] flex-col justify-start items-start gap-2 flex md:flex-1 md:h-auto md:gap-4 md:inline-flex">
                <div className="self-stretch h-[185px] w-[328px] flex-col justify-start items-start gap-4 flex md:w-[411px] md:h-[231px] relative">
                  <div className="self-stretch">
                    <Image
                      src="/Images/11.png"
                      alt="エンベーダー"
                      layout="fill"
                      style={{ borderRadius: "12px" }}
                      priority={true}
                    />
                  </div>
                  <div className="px-[9px] py-1 bg-sky-400 rounded-full justify-start items-start gap-2.5 inline-flex absolute right-[16px] top-[16px]">
                    <div className="text-[#FDFDFD] text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      エンベーダー
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch text-[#FDFDFD] text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                    2022.10.05
                  </div>
                  <div className="self-stretch text-[#FDFDFD] text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                    エンベーダーの利用人数が5000名を突破しました。
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper self-stretch h-[914px] flex-col justify-start items-start gap-10 flex md:h-auto md:gap-6 md:inline-flex">
              <div className="self-stretch h-[278px] flex-col justify-start items-start gap-2 flex md:flex-1 md:h-auto md:gap-4 md:inline-flex">
                <div className="self-stretch h-[185px] w-[328px] flex-col justify-start items-start gap-4 flex md:w-[411px] md:h-[231px] relative">
                  <div className="self-stretch">
                    <Image
                      src="/Images/12.png"
                      alt="システム・アプリケーション開発"
                      layout="fill"
                      style={{ borderRadius: "12px" }}
                      priority={true}
                    />
                  </div>
                  <div className="px-[9px] py-1 bg-orange-400 rounded-full justify-start items-start gap-2.5 inline-flex absolute right-[16px] top-[16px]">
                    <div className="text-[#FDFDFD] text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      システム・アプリケーション開発
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch text-[#FDFDFD] text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                    2022.09.11
                  </div>
                  <div className="self-stretch text-[#FDFDFD] text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                    システム・アプリケーション開発の受託開発事業を開始しました。
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[278px] flex-col justify-start items-start gap-2 flex md:flex-1 md:h-auto md:gap-4 md:inline-flex">
                <div className="self-stretch h-[185px] w-[328px] flex-col justify-start items-start gap-4 flex md:w-[411px] md:h-[231px] relative">
                  <div className="self-stretch">
                    <Image
                      src="/Images/13.png"
                      alt="Web制作"
                      layout="fill"
                      style={{ borderRadius: "12px" }}
                      priority={true}
                    />
                  </div>
                  <div className="px-[9px] py-1 bg-purple-500 rounded-full justify-start items-start gap-2.5 inline-flex absolute right-[16px] top-[16px]">
                    <div className="text-[#FDFDFD] text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      Web制作
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start gap-1 flex md:h-[55px]">
                  <div className="self-stretch text-[#FDFDFD] text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                    2023.05.16
                  </div>
                  <div className="self-stretch text-[#FDFDFD] text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                    Web制作の受託開発事業を開始しました。
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[278px] flex-col justify-start items-start gap-2 flex md:flex-1 md:h-auto md:gap-4 md:inline-flex">
                <div className="self-stretch h-[185px] w-[328px] flex-col justify-start items-start gap-4 flex md:w-[411px] md:h-[231px] relative">
                  <div className="self-stretch">
                    <Image
                      src="/Images/14.png"
                      alt="RareTECH"
                      layout="fill"
                      style={{ borderRadius: "12px" }}
                      priority={true}
                    />
                  </div>
                  <div className="px-[9px] py-1 bg-indigo-500 rounded-full justify-start items-start gap-2.5 inline-flex absolute right-[16px] top-[16px]">
                    <div className="text-[#FDFDFD] text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                      RareTECH
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch text-[#FDFDFD] text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                    2022.01.30
                  </div>
                  <div className="self-stretch text-[#FDFDFD] text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                    ITスクールRareTECHの受講生が300名を突破しました。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 px-8 py-4 bg-lime-300  rounded-full justify-center items-center inline-flex">
            <div className="flex-1 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
              一覧を見る
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
