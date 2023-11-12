import Image from "next/image";

export function Service() {
  return (
    <>
      <div
        id="service"
        className="w-full h-full py-20 bg-[#212121] flex-col justify-start items-center inline-flex "
      >
        <div className="w-[328px] h-[2334px] flex-col justify-start items-start gap-16 md:w-[960px] md:h-[1635px] md:gap-20 flex">
          <div className="self-stretch w-[328px] h-[196px] flex-col justify-start items-center gap-10 flex md:inline-flex md:w-[960px] md:h-[172px]">
            <div className="flex-col justify-start items-center flex">
              <div className="text-[#FDFDFD] text-[40px] font-bold font-['Inter'] leading-[60px] tracking-[1.60px] ">
                Service
              </div>
              <div className="text-[#CBF34D] text-base font-bold font-['Noto Sans JP'] leading-6 tracking-wide ">
                事業内容
              </div>
            </div>
            <div className="self-stretch md:self-auto text-[#EEEEEE] text-base font-medium font-['Noto Sans JP'] leading-6 tracking-wide md:w-[640px]">
              ITエンジニア教育事業・受託開発事業をはじめとし、テクノロジーを活用した各種サービスを提供しております。
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-10 inline-flex h-[1023px] w-[328px] md:h-[677px] md:w-[960px]">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-2 self-stretch bg-[#CBF34D]"></div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-[#FDFDFD] text-[32px] font-bold font-['Inter'] leading-[48px] tracking-wider">
                  Education
                </div>
                <div className="text-[#FDFDFD] text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  ITエンジニア教育事業
                </div>
              </div>
            </div>
            <div className="self-stretch md:self-auto h-[914px] md:h-auto flex-col justify-start items-start gap-10 md:gap-16 flex">
              <div className="self-stretch md:self-auto w-[328px] h-[449px] md:w-[960px] md:h-[264px] flex-col md:flex-row justify-start items-start gap-6 md:gap-16 flex md:inline-flex">
                <div className="md:grow md:shrink md:basis-0 md:flex-col md:justify-start md:items-start md:gap-10 md:inline-flex">
                  <div className="container-A self-stretch h-[369px] md:h-[168px] flex-col justify-start items-start gap-2 md:gap-6 flex">
                    <div className="Section-Headline-A text-[#FDFDFD] text-2xl font-bold font-['Noto Sans JP'] leading-9 tracking-wide">
                      ITスクール
                      <br />
                      RareTECH
                    </div>
                    <div className="Section-Image-A">
                      <Image
                        src="/Images/05.png"
                        alt="RareTECH"
                        width={400}
                        height={225}
                        style={{ borderRadius: "16px" }}
                        priority={true}
                      />
                    </div>
                    <div className="Section-Text-A self-stretch text-[#EEEEEE] text-base font-medium font-['Noto Sans JP'] leading-6 tracking-wide">
                      希少型エンジニアを育成するITスクールです。プログラミングに限らず、ネットワークやLinuxまで、徹底して基礎に拘るカリキュラムです。
                    </div>
                    <div className="Section-btn-A w-60 h-14 px-8 py-4 bg-accent-100 rounded-full justify-center items-center inline-flex">
                      <div className="grow shrink basis-0 text-center text-[#212121] text-base font-bold font-['Noto Sans JP'] leading-6 tracking-wide">
                        詳しく見る
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch  md:self-auto h-[425px] md:h-auto md:w-[960px] flex-col md:flex-row justify-start items-start gap-16 flex md:inline-flex">
                <div className="self-stretch h-[425px] md:flex-1 flex-col justify-start items-start gap-6 md:gap-10 flex md:inline-flex">
                  <div className="container-B self-stretch h-[345px] md:h-[144px] flex-col justify-start items-start gap-2 md:gap-6 flex">
                    <div className="Section-Headline-B text-[#FDFDFD] text-2xl font-bold font-['Noto Sans JP'] leading-9 tracking-wide">
                      インフラ学習サービス
                      <br />
                      エンベーダー
                    </div>
                    <div className="Section-Image-B">
                      <Image
                        src="/Images/06.png"
                        alt="Envader"
                        width={400}
                        height={225}
                        style={{ borderRadius: "16px" }}
                        priority={true}
                      />
                    </div>
                    <div className="Section-Text-B self-stretch text-[#EEEEEE] text-base font-medium leading-6 tracking-wide">
                      日本初の環境構築型のインフラ学習サービスです。Linux、データベース、サイバーセキュリティ等の学習が可能です。
                    </div>
                    <div className="Section-btn-B w-60 px-8 py-4 bg-accent-100 rounded-full justify-center items-center inline-flex">
                      <div className="flex-1 text-center text-[#212121] text-base font-bold font-['Noto Sans JP'] leading-6 tracking-wide">
                        詳しく見る
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col justify-start items-start gap-10 inline-flex h-[1023px] w-[328px] md:h-[677px] md:w-[960px]">
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-2 self-stretch bg-[#CBF34D]"></div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-[#FDFDFD] text-[32px] font-bold font-['Inter'] leading-[48px] tracking-wider">
                  Development
                </div>
                <div className="text-[#FDFDFD] text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  受託開発事業
                </div>
              </div>
            </div>
            <div className="self-stretch md:self-auto h-[914px] md:h-auto flex-col justify-start items-start gap-10 md:gap-16 flex">
              <div className="self-stretch md:self-auto w-[328px] h-[449px] md:w-[960px] md:h-[264px] flex-col md:flex-row justify-start items-start gap-6 md:gap-16 flex md:inline-flex">
                <div className="md:grow md:shrink md:basis-0 md:flex-col md:justify-start md:items-start md:gap-10 md:inline-flex">
                  <div className="container-A self-stretch h-[369px] md:h-[168px] flex-col justify-start items-start gap-2 md:gap-6 flex">
                    <div className="Section-Headline-A text-[#FDFDFD] text-2xl font-bold font-['Noto Sans JP'] leading-9 tracking-wide">
                      システム・アプリケーション開発
                    </div>
                    <div className="Section-Image-A">
                      <Image
                        src="/Images/07.png"
                        alt="システム・アプリケーション開発"
                        width={400}
                        height={225}
                        style={{ borderRadius: "16px" }}
                        priority={true}
                      />
                    </div>
                    <div className="Section-Text-A self-stretch text-[#EEEEEE] text-base font-medium font-['Noto Sans JP'] leading-6 tracking-wide">
                      要件定義から実装、運用まで、フルスクラッチにてアプリケーションを開発します。クラウドネイティブ開発をメインとしております。
                    </div>
                    <div className="Section-btn-A w-60 h-14 px-8 py-4 bg-accent-100 rounded-full justify-center items-center inline-flex">
                      <div className="grow shrink basis-0 text-center text-[#212121] text-base font-bold font-['Noto Sans JP'] leading-6 tracking-wide">
                        詳しく見る
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch  md:self-auto h-[425px] md:h-auto md:w-[960px] flex-col md:flex-row justify-start items-start gap-16 flex md:inline-flex">
                <div className="self-stretch h-[425px] md:flex-1 flex-col justify-start items-start gap-6 md:gap-10 flex md:inline-flex">
                  <div className="container-B self-stretch h-[345px] md:h-[144px] flex-col justify-start items-start gap-2 md:gap-6 flex">
                    <div className="Section-Headline-B text-[#FDFDFD] text-2xl font-bold font-['Noto Sans JP'] leading-9 tracking-wide">
                      Web制作
                    </div>
                    <div className="Section-Image-B">
                      <Image
                        src="/Images/08.png"
                        alt="Web制作"
                        width={400}
                        height={225}
                        style={{ borderRadius: "16px" }}
                        priority={true}
                      />
                    </div>
                    <div className="Section-Text-B self-stretch text-[#EEEEEE] text-base font-medium leading-6 tracking-wide">
                      会社HPやサービスLPなど幅広いジャンルのWebサイトを制作いたします。ノーコードを利用するため、素早い納品が可能です。
                    </div>
                    <div className="Section-btn-B w-60 px-8 py-4 bg-accent-100 rounded-full justify-center items-center inline-flex">
                      <div className="flex-1 text-center text-[#212121] text-base font-bold font-['Noto Sans JP'] leading-6 tracking-wide">
                        詳しく見る
                      </div>
                    </div>
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
