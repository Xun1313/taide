"use client";

import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import group_1 from "~/images/team/group_1.png";
import group_2 from "~/images/team/group_2.png";
import group_3 from "~/images/team/group_3.png";
import group_4 from "~/images/team/group_4.png";
import group_5 from "~/images/team/group_5.png";
import group_6 from "~/images/team/group_6.png";
import group_7 from "~/images/team/group_7.png";
import group_8 from "~/images/team/group_8.png";
import team_1 from "~/images/team/team_1.png";
import team_2 from "~/images/team/team_2.png";
import team_3 from "~/images/team/team_3.png";
import team_4 from "~/images/team/team_4.png";
import team_5 from "~/images/team/team_5.png";
import team_6 from "~/images/team/team_6.png";
import team_7 from "~/images/team/team_7.png";
import team_8 from "~/images/team/team_8.png";
import team_9 from "~/images/team/team_9.png";
import team_10 from "~/images/team/team_10.png";
import team_11 from "~/images/team/team_11.png";
import team_12 from "~/images/team/team_12.png";
import team_13 from "~/images/team/team_13.png";
import team_14 from "~/images/team/team_14.png";
import team_15 from "~/images/team/team_15.png";
import team_16 from "~/images/team/team_16.png";
import team_17 from "~/images/team/team_17.png";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

const FilterRender = () => {
  const [active, setActive] = useState("全部");
  const menuList = useMemo(
    () => ["全部", "模型鑄造組", "應用領域組", "其他", "前期參與"],
    []
  );
  const searchParams = useSearchParams();

  useEffect(() => {
    $(document).ready(function () {
      var $grid = $(".grid").isotope({
        itemSelector: ".element-item",
        layoutMode: "fitRows",
      });
      $(".filter-button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      const path = window.location.hash.split("/").pop();
      if (path == "#tag1") {
        setActive(menuList[1]);
        $grid.isotope({ filter: ".tag1" });
      } else if (path == "#tag2") {
        setActive(menuList[2]);
        $grid.isotope({ filter: ".tag2" });
      } else if (path == "#tag3") {
        setActive(menuList[3]);
        $grid.isotope({ filter: ".tag3" });
      } else if (path == "#tag4") {
        setActive(menuList[4]);
        $grid.isotope({ filter: ".tag4" });
      }
    });

    return () => {
      $(document).ready(function () {
        $(".filter-button-group").off("click");
      });
    };
  }, [menuList, searchParams]);

  // useEffect(() => {
  //   if (active === menuList[5] || active === menuList[6]) {
  //     $(document).ready(function () {
  //       $(".grid").isotope({
  //         itemSelector: ".element-item",
  //         layoutMode: "fitRows",
  //       });
  //     });
  //   }
  // }, [active]);

  return (
    <>
      <div data-js="filtering-demo">
        <div className="tagList tagClick filter-button-group button-group js-radio-button-group">
          {menuList.map((e, i) => (
            <button
              className={`tagUnit secondary ${i > 0 ? `tagUnit${i}` : ""} ${
                active === e ? "active" : ""
              }`}
              id={`tagUnit_${i}`}
              data-filter={i === 0 ? "*" : `.tag${i}`}
              onClick={() => setActive(e)}
              key={e}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="cardTeam grid">
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <a
                href="https://www.cs.nycu.edu.tw/members/detail/icwu"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_1} alt="吳毅成 Wu, I-Chen" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>吳毅成</span>
                <span>Wu, I-Chen</span>
              </h4>
              <div className="text">
                <span>陽明交通大學資訊學院 特聘教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">模型鑄造組</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <a
                href="https://speech.ee.ntu.edu.tw/~tlkagk/index.html"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_2} alt="李宏毅 Lee, Hung-Yi" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>李宏毅</span>
                <span>Lee, Hung-Yi</span>
              </h4>
              <div className="text">
                <span>國立臺灣大學電機工程學系 副教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">模型鑄造組</div>
                <div className="tagUnit secondary">機器學習專家</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <a
                href="https://sites.google.com/nycu.edu.tw/speechlabx/prof-yuan-fu-liao?authuser=0"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_3} alt="廖元甫 Liao, Yuan-Fu" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>廖元甫</span>
                <span>Liao, Yuan-Fu</span>
              </h4>
              <div className="text">
                <span>國立陽明交通大學產業創新研究學院智能系統研究所 教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">模型鑄造組</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag1">
            <div className="photo">
              <a
                href="https://homepage.iis.sinica.edu.tw/pages/hhhuang/contact_zh.html"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_4} alt="黃瀚萱 Huang, Hen-Hsen" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>黃瀚萱</span>
                <span>Huang, Hen-Hsen</span>
              </h4>
              <div className="text">
                <span>中央研究院資訊科學研究所 助研究員</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">模型鑄造組</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag2">
            <div className="photo">
              <a
                href="http://www.iisr.csie.ncu.edu.tw/faculty"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_5} alt="蔡宗翰 Tsai, Tzong-Han" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>蔡宗翰</span>
                <span>Tsai, Tzong-Han</span>
              </h4>
              <div className="text">
                <span>中央大學資訊工程學系 教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">應用領域組</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag2">
            <div className="photo">
              <a
                href="https://www.cs.nccu.edu.tw/~chaolin/cindex.html"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_6} alt="劉昭麟 Liu, Chao-Lin" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>劉昭麟</span>
                <span>Liu, Chao-Lin</span>
              </h4>
              <div className="text">
                <span>國立政治大學資訊學院 資訊科學系 特聘教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">應用領域組</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag2">
            <div className="photo">
              <a
                href="https://homepage.citi.sinica.edu.tw/pages/chiuhanhsiao/index_zh.html"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_7} alt="蕭邱漢 Hsiao, Chiu-Han" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>蕭邱漢</span>
                <span>Hsiao, Chiu-Han</span>
              </h4>
              <div className="text">
                <span>中央研究院資訊科技創新研究中心 研究副技師</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">應用領域組</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag3">
            <div className="photo">
              <a
                href="https://lab.depositar.io/"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_8} alt="莊庭瑞 Chuang, Tyng-Ruey" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>莊庭瑞</span>
                <span>Chuang, Tyng-Ruey</span>
              </h4>
              <div className="text">
                <span>中央研究院資訊科學研究所 副研究員</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">其他</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag3">
            <div className="photo">
              <Image src={team_9} alt="蕭奕弘 Hsiao, Yi-Hon" />
            </div>
            <div className="infoCon">
              <h4>
                <span>蕭奕弘</span>
                <span>Hsiao, Yi-Hon</span>
              </h4>
              <div className="text">
                <span>蕭奕弘律師事務所 主持律師</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">其他</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag3">
            <div className="photo">
              <a
                href="https://www.nchc.org.tw/"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_10} alt="國家實驗研究院國家高速網路與計算中心" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>國家實驗研究院國家高速網路與計算中心</span>
                <span>
                  National Center for High-performance Computing, NARLabs.
                </span>
              </h4>
              <div className="text">
                <span>算力支援</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">其他</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag3">
            <div className="photo">
              <a
                href="https://www.stpi.narl.org.tw/"
                target="_blank"
                rel="noopener noreferrer"
              ></a>

              <Image src={team_11} alt="國家實驗研究院科技政策研究與資訊中心" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>國家實驗研究院科技政策研究與資訊中心</span>
                <span>
                  Science & Technology Policy Research and Information Center,
                  NARLabs.
                </span>
              </h4>
              <div className="text">
                <span>訓練資料</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">其他</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag4">
            <div className="photo">
              <Image src={team_12} alt="李育杰 Lee, Yuh-Jye" />
            </div>
            <div className="infoCon">
              <h4>
                <span>李育杰</span>
                <span>Lee, Yuh-Jye</span>
              </h4>
              <div className="text">
                <span>TWNIC財團法人臺灣網路資訊中心 董事</span>
                <span>科技政策諮詢專家室-資通訊群組 召集人</span>
                <span>中央研究院資訊科技創新研究中心 研究員</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">前期參與</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag4">
            <div className="photo">
              <a
                href="https://iagentntu.github.io/professor/Jane.html"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_13} alt="許永真 Hsu, Yung-Jen" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>許永真</span>
                <span>Hsu, Yung-Jen</span>
              </h4>
              <div className="text">
                <span>國立臺灣大學資訊工程學系 教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">前期參與</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
          <div className="cardTeam__item element-item tag4">
            <div className="photo">
              <a
                href="https://www.csie.nuk.edu.tw/~wuch/"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <Image src={team_14} alt="吳俊興 Wu, Chun-Hsin" />

              <div className="btn">
                <Image
                  src={btnNextArrow}
                  style={{ height: "auto" }}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="infoCon">
              <h4>
                <span>吳俊興</span>
                <span>Wu, Chun-Hsin</span>
              </h4>
              <div className="text">
                <span>國立高雄大學資訊工程學系 副教授</span>
              </div>
              <div className="tagList">
                <div className="tagUnit secondary">前期參與</div>
                <div className="tagUnit secondary">顧問</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterRender;
