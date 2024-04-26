"use client";

import { useEffect } from "react";
const Navigation = () => {
  useEffect(() => {
    $(document).ready(function () {
      var headerH = $(".header").height() as number;
      const terms: {
        offset: Function;
      } = $(".terms");
      const download: {
        offset: Function;
      } = $(".download");
      const article__item: {
        offset: Function;
      } = $(".article__item.even");
      const article__item_FAQ: {
        offset: Function;
      } = $(".article__item.FAQ");
      const article__item_Benchmark: {
        offset: Function;
      } = $(".article__item.Benchmark");
      $(".toTerms").click(function () {
        if (window.matchMedia("(max-width:960px)").matches) {
          $("html, body").animate(
            {
              scrollTop: terms.offset().top - headerH,
            },
            600
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: terms.offset().top - headerH - 50,
            },
            600
          );
        }
      });
      $(".toDownload").click(function () {
        if (window.matchMedia("(max-width:960px)").matches) {
          $("html, body").animate(
            {
              scrollTop: download.offset().top - headerH,
            },
            600
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: terms.offset().top - headerH - 50,
            },
            600
          );
        }
      });
      $(".toModel").click(function () {
        if (window.matchMedia("(max-width:960px)").matches) {
          $("html, body").animate(
            {
              scrollTop: article__item.offset().top - headerH,
            },
            600
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: article__item.offset().top - headerH - 50,
            },
            600
          );
        }
      });
      $(".toFAQ").click(function () {
        if (window.matchMedia("(max-width:960px)").matches) {
          $("html, body").animate(
            {
              scrollTop: article__item_FAQ.offset().top - headerH,
            },
            600
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: article__item_FAQ.offset().top - headerH - 50,
            },
            600
          );
        }
      });
      $(".toBenchmark").click(function () {
        if (window.matchMedia("(max-width:960px)").matches) {
          $("html, body").animate(
            {
              scrollTop: article__item_Benchmark.offset().top - headerH,
            },
            600
          );
        } else {
          $("html, body").animate(
            {
              scrollTop: article__item_Benchmark.offset().top - headerH - 50,
            },
            600
          );
        }
      });
    });

    return () => {
      $(document).ready(function () {
        $(".toTerms").off("click");
        $(".toDownload").off("click");
        $(".toModel").off("click");
      });
    };
  }, []);

  return (
    <ul>
      <li>
        <a style={{ cursor: "pointer" }} className="toTerms">
          ·Llama3-TAIDE 模型社群授權同意書
        </a>
      </li>
      <li>
        <a style={{ cursor: "pointer" }} className="toDownload">
          ·模型版本下載
        </a>
      </li>
      <li>
        <a style={{ cursor: "pointer" }} className="toModel">
          ·TAIDE合作模式
        </a>
      </li>
      <li>
        <a style={{ cursor: "pointer" }} className="toFAQ">
          ·TAIDE模型使用常見問題
        </a>
      </li>
      <li>
        <a style={{ cursor: "pointer" }} className="toBenchmark">
          ·五大任務 benchmark 下載
        </a>
      </li>
    </ul>
  );
};
export default Navigation;
