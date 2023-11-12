import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="w-full pt-20 pb-6 bg-neutral-800 flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="w-[328px] flex-col justify-start items-center gap-10 inline-flex md:flex md:w-auto">
          <div className="footer-wrapper self-stretch flex-col justify-start items-start gap-10 flex md:flex-row md:justify-between md:inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-2 flex md:w-[425px] md:inline-flex">
              <Link
                href="/"
                className="w-16 h-16 pt-px pb-[0.94px] justify-center items-center inline-flex"
              >
                <Image
                  src="/Images/Logo.png"
                  alt="株式会社var"
                  width={288}
                  height={282}
                />
              </Link>
              <div className="text-white text-xl font-bold font-['Noto Sans JP'] leading-[30px] tracking-wide">
                株式会社var
              </div>
              <div className="text-zinc-100 text-sm font-medium font-['Noto Sans JP'] leading-[21px] tracking-wide">
                〒 891-0145
                <br />
                鹿児島県鹿児島市錦江台3-21-22
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-start gap-2 flex">
                  <Link
                    href="https://twitter.com/RaretechO"
                    className="text-stone-500 text-sm font-medium font-['Inter'] underline leading-[21px] tracking-wide"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://zenn.dev/var"
                    className="text-stone-500 text-sm font-medium font-['Inter'] underline leading-[21px] tracking-wide"
                  >
                    Zenn
                  </Link>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-end gap-6 flex md:inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex md:justify-center md:gap-10 md:inline-flex md:flex-row">
                <div className="flex-col justify-center items-start gap-2 flex md:inline-flex">
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    サービス
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    ITスクール RareTECH
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    インフラ学習サービス エンベーダー
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    システム・アプリケーション開発
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    Web制作
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-2 flex md:inline-flex">
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    企業情報
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    ミッション
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    ビジョン
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    バリュー
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    役員一覧
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    会社概要
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-2 flex md:inline-flex">
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    採用情報
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    代表メッセージ
                  </div>
                  <div className="text-stone-500 text-sm font-bold font-['Inter'] leading-[21px] tracking-wide">
                    募集要項
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-2 flex md:inline-flex">
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    お知らせ
                  </div>
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    サステナビリティ
                  </div>
                  <div className="text-zinc-100 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide">
                    プライバシーポリシー
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex md:inline-flex md:flex-row md:justify-end">
                <div className="self-stretch px-8 py-4 bg-lime-300 rounded-full justify-center items-center">
                  <Link
                    href="/contact"
                    className="flex-1 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
                  >
                    お問い合わせ
                  </Link>
                </div>
                <div className="self-stretch px-8 py-4 bg-white rounded-full justify-center items-center">
                  <Link
                    href="/document"
                    className="flex-1 text-center text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
                  >
                    資料ダウンロード
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-stone-500 text-xs font-bold font-['Inter'] leading-[18px] tracking-wide">
            ©︎ 2023 var Inc.
          </div>
        </div>
      </div>
    </>
  );
}
