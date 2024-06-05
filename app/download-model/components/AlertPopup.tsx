"use client";
import { useEffect } from "react";
import Image from "next/image";

import iconPopupClose from "~/images/en/icon_popup_close.svg";

const AlertPopup = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".popupUnit").addClass("open");
    });

    return () => {
      $(document).ready(function () {
        $(".popupUnit").removeClass("open");
      });
    };
  }, []);

  function closePopupMsg() {
    $(".popupUnit").removeClass("open");
  }

  return (
    <div className="popupUnit alignCenter">
      <a
        className="popupUnit__bg"
        href="javascript:void(0);"
        onClick={closePopupMsg}
      ></a>
      <div className="popupUnit__wrap">
        <a className="close" href="javascript:void(0);" onClick={closePopupMsg}>
          <Image
            src={iconPopupClose}
            style={{ height: "auto" }}
            alt="close"
          />
        </a>
        <article className="postUnit">
          <div className="postUnit__body">
            本網站Llama3-TAIDE
            模型社群授權同意書、合作模式說明、使用常見問題與五大任務 benchmark
            下載等相關說明，僅限於由國研院或國研院授權的網站(TAIDE官方網站、TAIDE
            Hugging face)上取用的 TAIDE L
            類模型(僅包含TAIDE-LX-7B、TAIDE-LX-7B-Chat、TAIDE-LX-7B-Chat-4bit、Llama3-TAIDE-LX-8B-Chat-Alpha1、Llama3-TAIDE-LX-8B-Chat-Alpha1-4bit)。若您選擇從其他未經國研院明確授權的網站取用
            TAIDE
            L類模型或其壓縮版，國研院不負任何擔保責任。請自行判斷該等網站之合適性或安全性，對於因此所生的損害(包括但不限於電腦系統受損或資料喪失)，國研院概不負責。
          </div>
        </article>
      </div>
    </div>
  );
};

export default AlertPopup;
