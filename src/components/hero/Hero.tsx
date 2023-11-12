import Link from "next/link";

export function Hero() {
  return (
    <>
      <div className="min-h-screen w-full bg-root-hero-sp bg-cover flex-col justify-center items-center gap-2.5 inline-flex md:aspect-video md:h-auto md:bg-root-hero-pc md:bg-center xl:h-screen">
        <div className="h-[324px] max-w-[72%] w-[72%] flex-col justify-center items-start gap-2.5 flex md:h-[442px]">
          <div className=" h-[324px] flex-col justify-start items-start gap-16 flex md:self-stretch md:h-[442px]">
            <div className="self-stretch h-[204px] flex-col justify-start items-start gap-6 flex">
              <div className="font-bold text-2xl leading-9 tracking-[1.92px] md:text-5xl md:leading-[72px] md:tracking-[0.96px]">
                テクノロジーを通じて、
                <br />
                夢や目標を実現できる
                <br />
                環境を提供します
              </div>
              <div className="text-base leading-6 tracking-[0.64px] md:text-xl md:leading-[30px]  md:tracking-[0.80px]">
                IT教育、システム開発から
                <br className="md:hidden" />
                企業を支援する
                <br />
                テクノロジーカンパニーです。
              </div>
            </div>
          </div>
          <div className="w-[240px] px-8 py-4 md:w-80 md:px-12 md:py-7 bg-accent-100 rounded-full overflow-hidden justify-center items-center inline-flex">
            <Link
              href="#service"
              className="flex-1 text-center text-base font-bold leading-6 tracking-[0.64px] md:text-xl md:leading-[30px] md:tracking-[0.80px]"
            >
              事業内容を見る
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
