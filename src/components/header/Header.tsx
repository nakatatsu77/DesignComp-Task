import Image from "next/image";
import Link from "next/link";
import { Modal } from "./Modal";
import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="absolute w-full h-20 px-4 py-3 flex-col justify-start items-center gap-2.5 inline-flex md:px-10 md:py-4">
        <div className="fixed w-[67%] h-16 px-4 bg-white rounded-2xl justify-between items-center inline-flex z-10 md:h-20 md:px-10">
          <Link
            href="/"
            className="w-10 h-10 pt-[0.62px] pb-[0.59px] justify-center items-center flex md:w-12 md:h-12 md:pt-[0.75px] md:pb-[0.70px]"
          >
            <Image
              src="/Images/Logo.png"
              alt="株式会社var"
              width={288}
              height={282}
            />
          </Link>
          <div className="NavLink self-stretch justify-start items-center gap-10 hidden md:flex">
            <div className="justify-start items-center gap-6 flex">
              <Link
                href="/service"
                className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
              >
                サービス
              </Link>
              <Link
                href="/company"
                className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
              >
                企業情報
              </Link>
              <Link
                href="/recruit"
                className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
              >
                採用情報
              </Link>
              <Link
                href="/news"
                className="text-neutral-800 text-base font-bold font-['Noto Sans JP'] leading-normal tracking-wide"
              >
                お知らせ
              </Link>
            </div>
            <div className="self-stretch justify-start items-center gap-2 flex">
              <Link
                href="/contact"
                className="h-[45px] px-6 py-3 bg-lime-300 rounded-full justify-center items-center flex hover:bg-lime-400 transition"
              >
                <div className="flex-1 text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  お問い合わせ
                </div>
              </Link>
              <Link
                href="/document"
                className="h-[45px] px-6 py-3 bg-white rounded-full border border-neutral-800 justify-center items-center flex hover:opacity-50 transition"
              >
                <div className="flex-1 text-center text-neutral-800 text-sm font-bold font-['Noto Sans JP'] leading-[21px] tracking-wide">
                  資料ダウンロード
                </div>
              </Link>
            </div>
          </div>
          <button
            onClick={handleMenuOpen}
            type="button"
            className="ModalIcon w-10 h-10 pt-[0.62px] pb-[0.59px] justify-center items-center flex md:w-12 md:h-12 md:pt-[0.75px] md:pb-[0.70px]"
          >
            <Image
              src="/Images/bars-3-bottom-right.png"
              alt="Modal Icon"
              width={288}
              height={282}
            />
          </button>
        </div>
        <nav
          className={
            openMenu
              ? "text-left fixed w-[360px] h-screen bg-neutral-800 right-0 top-0 flex-col justify-start items-start gap-10 inline-flex duration-300 z-20"
              : "fixed right-[-100%] ease-linear duration-300"
          }
        >
          <Modal onMenuToggle={handleMenuOpen} />
        </nav>
      </div>
    </>
  );
}
