"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import iconAnything1 from "~/images/en/icon_anything_1.svg";
import iconAnything2 from "~/images/en/icon_anything_2.svg";
import iconAnything3 from "~/images/en/icon_anything_3.svg";
import iconAnything4 from "~/images/en/icon_anything_4.svg";
import iconAnything5 from "~/images/en/icon_anything_5.svg";

const PlanList = () => {
  const swiperElement = useRef<HTMLDivElement>(null);
  interface swiperInterface {
    destroy: Function;
  }
  const swiperObj = useRef<swiperInterface>({
    destroy: () => {},
  });
  useEffect(() => {
    swiperObj.current = new Swiper(swiperElement.current as HTMLDivElement, {
      modules: [Autoplay],
      loop: true,
      slidesPerView: 3,
      spaceBetween: 15,
      autoplay: {
        delay: 2500,
        // disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 3.2,
          spaceBetween: 15,
        },
      },
    });

    return () => swiperObj.current.destroy();
  }, []);

  return (
    <article className="planList">
      <div className="planList__hd">
        <h2>TAIDE 可以做什麼？</h2>
      </div>
      <div className="swiper planSwiper" ref={swiperElement}>
        <div className="swiper-wrapper">
          <div className="swiper-slide slide1">
            <div className="infoCon">
              <h3>
                <span>自動摘要</span>
              </h3>
              <div className="text">
                快速提取文章摘要，協助用戶快速掌握關鍵資訊，提升閱讀和理解效率。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything1}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide2">
            <div className="infoCon">
              <h3>
                <span>寫信</span>
              </h3>
              <div className="text">
                自動撰寫電子郵件內容，滿足不同情境下的溝通需求，提升業務效率。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything2}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide3">
            <div className="infoCon">
              <h3>
                <span>寫文章</span>
              </h3>
              <div className="text">
                從主題選擇到內容編寫，讓用戶輕鬆完成各類寫作任務。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything3}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide4">
            <div className="infoCon">
              <h3>
                <span>中翻英</span>
              </h3>
              <div className="text">
                提供中文翻譯成英文的功能，協助用戶輕鬆應對跨語言交流。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything4}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide5">
            <div className="infoCon">
              <h3>
                <span>英翻中</span>
              </h3>
              <div className="text">
                提供英文翻譯成中文的功能，讓用戶能快速閱讀和理解英文文件。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything5}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide1">
            <div className="infoCon">
              <h3>
                <span>自動摘要</span>
              </h3>
              <div className="text">
                快速提取文章摘要，協助用戶快速掌握關鍵資訊，提升閱讀和理解效率。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything1}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide2">
            <div className="infoCon">
              <h3>
                <span>寫信</span>
              </h3>
              <div className="text">
                自動撰寫電子郵件內容，滿足不同情境下的溝通需求，提升業務效率。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything2}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide3">
            <div className="infoCon">
              <h3>
                <span>寫文章</span>
              </h3>
              <div className="text">
                從主題選擇到內容編寫，讓用戶輕鬆完成各類寫作任務。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything3}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide4">
            <div className="infoCon">
              <h3>
                <span>中翻英</span>
              </h3>
              <div className="text">
                提供中文翻譯成英文的功能，協助用戶輕鬆應對跨語言交流。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything4}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide5">
            <div className="infoCon">
              <h3>
                <span>英翻中</span>
              </h3>
              <div className="text">
                提供英文翻譯成中文的功能，讓用戶能快速閱讀和理解英文文件。
              </div>
              <div className="icon">
                <Image
                  src={iconAnything5}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlanList;
