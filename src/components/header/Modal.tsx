import Image from "next/image";
import Link from "next/link";

type MenuComponentProps = {
  onMenuToggle: () => void;
};

export function Modal({ onMenuToggle }: MenuComponentProps) {
  return (
    <>
      <div>
        <div className="w-[360px] h-[640px] px-8 py-6 flex-col justify-start items-start gap-10 inline-flex">
          <div className="self-stretch justify-between items-start inline-flex">
            <Link href="/" className="w-10 h-10 pt-[0.62px] pb-[0.59px] justify-center items-center flex md:w-12 md:h-12 md:pt-[0.75px] md:pb-[0.70px]">
              <Image
                src="/Images/Logo.png"
                alt="株式会社var"
                width={288}
                height={282}
              />
            </Link>
            <button onClick={onMenuToggle} className="w-10 h-10 relative">
              <Image
                src="/Images/x-mark.png"
                alt="xマーク"
                width={288}
                height={282}
              />
            </button>
          </div>
          <div className="self-stretch h-[306px] flex-col justify-center items-start gap-10 flex">
            <div className="flex-col justify-center items-start gap-6 flex">
              <Link
                href="/service"
                className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
              >
                サービス
              </Link>
              <Link
                href="/company"
                className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
              >
                企業情報
              </Link>
              <Link
                href="/recruit"
                className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
              >
                採用情報
              </Link>
              <Link
                href="/news"
                className="text-white text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
              >
                お知らせ
              </Link>
            </div>
            <div className="self-stretch h-[98px] flex-col justify-center items-start gap-2 flex">
              <div className="self-stretch px-6 py-3 bg-lime-300 rounded-full justify-center items-center inline-flex">
                <Link
                  href="/contact"
                  className="grow shrink basis-0 text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide"
                >
                  お問い合わせ
                </Link>
              </div>
              <div className="self-stretch px-6 py-3 bg-white rounded-full border border-neutral-800 justify-center items-center inline-flex">
                <Link
                  href="/document"
                  className="grow shrink basis-0 text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide"
                >
                  資料ダウンロード
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
