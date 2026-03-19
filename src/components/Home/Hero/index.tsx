import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-back-200">
      <div className="container pt-10 overflow-x-hidden flex max-lg:flex-col items-center lg:items-end lg:gap-8">
        <div className="lg:w-1/2 lg:pb-24">
          <h1 className="text-4xl lg:text-6xl text-balance md:max-lg:text-center">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="pt-5 pb-6 text-sm lg:text-base md:max-lg:text-center text-black/60 text-balance">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link href="/produtos" className="cta w-full lg:max-w-52.5">
            Shop Now
          </Link>
          <div className="mt-5 lg:mt-12 flex flex-wrap max-lg:justify-center gap-x-8 gap-y-3">
            <div>
              <span className="text-2xl lg:text-4xl font-bold">200+</span>
              <p className="max-lg:text-xs text-black/60">
                International Brands
              </p>
            </div>
            <span className="w-px bg-black/10"></span>
            <div>
              <span className="text-2xl lg:text-4xl font-bold">2,000+</span>
              <p className="max-lg:text-xs text-black/60">
                High-Quality Products
              </p>
            </div>
            <span className="hidden min-[468px]:inline-flex w-px bg-black/10"></span>
            <div>
              <span className="text-2xl lg:text-4xl font-bold">30,000+</span>
              <p className="max-lg:text-xs text-black/60">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="max-lg:mt-6 max-lg:h-112 lg:w-1/2 relative">
          <Image
            src="/hero-home.png"
            alt="Um homem e uma mulher lado a lado posando para a foto usando as roupas da SHOP.CO"
            width={620}
            height={620}
            loading="eager"
            className="object-contain h-full max-md:max-w-max"
          />
          <Image
            src="/hero-star.svg"
            alt=""
            width={76}
            height={76}
            className="absolute top-[25%] lg:top-[45%] left-[12%] lg:left-0 w-11 lg:w-14 h-11 lg:h-14"
          />
          <Image
            src="/hero-star.svg"
            alt=""
            width={76}
            height={76}
            className="absolute top-[5%] lg:top-[10%] right-[8%] lg:right-[5%]"
          />
        </div>
      </div>
    </section>
  );
}
