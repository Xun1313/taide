"use client";

import { useEffect } from "react";
import Image from "next/image";

import aboutProject2 from "~/images/about/aboutProject_2.png";

const Accordion1 = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".accordion").accordion({
        header: "h3",
        collapsible: true,
        active: false,
      });
    });

    return () => {
      $(document).ready(function () {});
    };
  }, []);

  return (
    <div className="section section2">
      <h2>打造臺灣本土AI引擎</h2>
      <div className="tagUnit grey">首個本土AI引擎</div>
      <div className="row">
        <div className="infoCon">
          <div className="accordion">
            <div className="accordion__item">
              <h3>專為臺灣訂製</h3>
              <div className="accordion__con">
                <p>
                  建立臺灣本土可信任的生成式AI對話引擎基礎模型，為政府和企業可依照需求選擇適用的模型大小及衡量算力，自行訓練模型或建構內部應用之模型。
                </p>
              </div>
            </div>
            <div className="accordion__item">
              <h3>多元化訓練素材</h3>
              <div className="accordion__con">
                <p>
                  引入不同領域的可用文本和訓練材料，以提高模型在各領域的性能。
                </p>
              </div>
            </div>
            <div className="accordion__item">
              <h3>奠定應用基礎</h3>
              <div className="accordion__con">
                <p>
                  建立計算環境和應用服務平台，提供模型開發所需的計算資源，為未來應用奠定基礎。
                </p>
              </div>
            </div>
            <div className="accordion__item">
              <h3>健全AI發展環境</h3>
              <div className="accordion__con">
                <p>
                  通過法律研究、測試規範和評估工具的開發，完善AI的發展環境，提高公眾對AI的信任。
                </p>
              </div>
            </div>
            <div className="accordion__item">
              <h3>公私協力創造雙贏</h3>
              <div className="accordion__con">
                <p>
                  通過公私合作，協助產業引入Foundation
                  Models，並可用於特定產業應用，由產業方提供數據，進行Fine
                  Tune。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="photo">
          <Image src={aboutProject2} style={{ height: "auto" }} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default Accordion1;
