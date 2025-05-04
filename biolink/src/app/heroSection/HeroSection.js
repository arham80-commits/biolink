import Image from "next/image";
import { useTranslation } from "../lib/translate";

export default function HeroSection() {
  const { t } = useTranslation();

  const images = [
    "/pic.png",
    "/pic2.png",
    "/pic3.png",
    "/pic4.png",
    "/pic5.png",
    "/pic6.png",
    "/pic7.png",
    "/pic8.png",
    "/pic9.png",
    "/pic.png",
  ];

  return (
    <section className="w-full bg-gradient-to-r bg-[url('/bg.png')] bg-cover bg-center relative overflow-hidden">
      <div className="container mx-auto md:px-12 px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-2">
              <span className="font-extrabold">{t("hero.titlePart1")}</span>
              <span className="font-[300px] ">
                {t("hero.titlePart2")}
              </span>
            </h1>
            <p className="text-white text-lg md:text-xl">
              {t("hero.subtitle")}
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-5 opacity-80">
            {images.map((imgSrc, index) => (
              <div key={index} className="h-32 overflow-hidden relative">
                <Image
                  src={imgSrc}
                  alt={t("hero.imageAlt", { number: index + 1 })}
                  width={182}
                  height={99}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
