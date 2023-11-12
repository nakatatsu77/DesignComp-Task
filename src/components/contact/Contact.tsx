import Link from "next/link";

export function Contact() {
  return (
    <>
      <div className="w-full h-[1082px] bg-root-contact-sp bg-cover bg-opacity-50 flex-col justify-start items-center inline-flex md:w-full md:h-[748px] md:bg-root-contact-pc">
        <div className="h-[1082px] py-[120px] px-7 flex-col justify-start items-center gap-16 flex md:h-[748px] md:gap-20">
          <div className="self-stretch text-center text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide md:text-[40px] md:leading-[60px]">
            業界・規模問わず多くの企業様に
            <br className="md:hidden" />
            ご利用いただいております。
            <br />
            まずはお気軽にご相談ください。
          </div>
          <div className="self-stretch flex-col justify-start items-start flex md:h-auto md:flex-row">
            <div className="self-stretch px-6 py-10 bg-zinc-800 rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-end gap-10 flex md:flex-1 md:h-auto md:px-16 md:py-10 md:inline-flex md:rounded-bl-2xl md:rounded-tr-none">
              <div className="justify-start items-start inline-flex absolute">
                <div className="text-stone-500 text-[40px] font-bold font-['Inter'] leading-10 tracking-wider">
                  CONTACT
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-6 flex ">
                <div className="self-stretch h-9 flex-col justify-start items-start flex">
                  <div className="text-white text-2xl font-bold font-['Noto Sans JP'] leading-9 tracking-wide z-10">
                    お問い合わせ
                  </div>
                </div>
                <div className="self-stretch text-zinc-100 text-base font-medium font-['Noto Sans JP'] leading-normal tracking-wide">
                  IT全般についてのご相談をお受けしております。
                  <br />
                  カウンセリング、見積もり作成ともに無料でご対応いたしますので、お気軽にご相談ください。
                </div>
                <Link
                  href="/contact"
                  className="w-60 px-8 py-4 bg-lime-300 rounded-full justify-center items-center inline-flex hover:bg-lime-400 transition"
                >
                  <div className="flex-1 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    お問い合わせ
                  </div>
                </Link>
              </div>
            </div>
            <div className="self-stretch px-6 py-10 bg-neutral-500 rounded-bl-2xl rounded-br-2xl flex-col justify-start items-end gap-10 flex md:flex-1 md:h-auto md:px-16 md:bg-neutral-400 md:rounded-tr-2xl md:inline-flex md:rounded-bl-none">
              <div className="justify-start items-start inline-flex absolute">
                <div className="text-neutral-400 text-[40px] font-bold font-['Inter'] leading-10 tracking-wider md:text-stone-300">
                  DOCUMENT
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-6 flex md:h-[132px]">
                <div className="self-stretch h-9 flex-col justify-start items-start flex">
                  <div className="text-white text-2xl font-bold font-['Noto Sans JP'] leading-9 tracking-wide z-10">
                    資料ダウンロード
                  </div>
                </div>
                <div className="self-stretch text-zinc-100 text-base font-medium font-['Noto Sans JP'] leading-normal tracking-wide">
                  会社案内、法人エンジニア研修に関するPDF資料をご用意しております。
                  <br />
                  一覧ページよりお受け取りください。
                </div>
                <Link
                  href="/document"
                  className="w-60 px-8 py-4 bg-white rounded-full justify-center items-center inline-flex  hover:opacity-50 transition"
                >
                  <div className="flex-1 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    資料ダウンロード
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
