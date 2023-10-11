import {  WithContext } from "schema-dts";

import Image from "next/image";
import banner from "~/images/home/banner.gif";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";

import photo5204902 from "~/images/news/photo_520490_2.png";
import photo5204903 from "~/images/news/photo_520490_3.png";
import photo5204904 from "~/images/news/photo_520490_4.png";
import StageUnit from "~/components/StageUnit";
import PlanList from "~/components/PlanList";
import BannerSwiper from "~/components/BannerSwiper";
import NewsListUnitSwiper from "~/components/NewsListUnitSwiper";
// import type { Metadata } from 'next'
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const Home = async () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "深入了解TAIDE計畫的背後策略、目標和里程碑。台灣如何透過生成式AI技術，開創新的科技未來。",
    additionalName:
      "深入了解TAIDE計畫的背後策略、目標和里程碑。台灣如何透過生成式AI技術，開創新的科技未來。",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  return (
    <>
      <article className="bannerUnit">
        <div className="bannerUnit__body">
          <div className="bannerUnit__wrap">
            <div className="bannerUnit__left">
              <Image src={banner} alt="banner" />
            </div>
            <div className="bannerUnit__right">
              <BannerSwiper />
            </div>
          </div>
        </div>
      </article>
      <PlanList />

      <StageUnit />
      <article className="teamUnit">
        <div className="teamUnit__body">
          <h2>TAIDE團隊陣容</h2>
          <div className="row">
            <div className="cardTeam">
              <div className="cardTeam__item odd max">
                <h3>超強陣容</h3>
                <div className="text">Engine Development</div>
              </div>
              <div className="cardTeam__item odd">
                <h3>
                  資料取得示
                  <br />
                  與標註小組
                </h3>
                <div className="text">
                  Data acquisition with annotation team
                </div>
                <div className="btn">
                  <a href="/teamList">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} alt="arrow" />
                  </a>
                </div>
              </div>
              <div className="cardTeam__item odd">
                <h3>
                  核心模型訓練
                  <br />
                  與RLHF小組
                </h3>
                <div className="text">Core model training with RLHF group</div>
                <div className="btn">
                  <a href="/teamList">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} alt="arrow" />
                  </a>
                </div>
              </div>
              <div className="cardTeam__item odd">
                <h3>
                  高速運算資源與
                  <br />
                  技術支援小組
                </h3>
                <div className="text">
                  High-speed computing resources and technical support team
                </div>
                <div className="btn">
                  <a href="/teamList">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} alt="arrow" />
                  </a>
                </div>
              </div>
              <div className="cardTeam__item odd">
                <h3>
                  應用服務平台建構
                  <br />
                  與管理小組
                </h3>
                <div className="text">
                  Application service platform construction and management team
                </div>
                <div className="btn">
                  <a href="/teamList">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="cardTeam">
              <div className="cardTeam__item even max">
                <h3>卓越團隊</h3>
                <div className="text">Environmental Development</div>
              </div>
              <div className="cardTeam__item even">
                <h3>
                  國際觀測
                  <br />
                  與規範小組
                </h3>
                <div className="text">
                  International observation with specification group
                </div>
              </div>
              <div className="cardTeam__item even">
                <h3>
                  評測系統與
                  <br />
                  驗測環境小組
                </h3>
                <div className="text">
                  Evaluation system and Testing Environment Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="newsListUnit">
        <div className="newsListUnit__body">
          <h2>TAIDE最新動態</h2>
          <div className="newsListUnit__wrap">
            <div className="newsListUnit__item max">
              <NewsListUnitSwiper />
            </div>
            <div className="newsListUnit__item">
              <div className="photo">
                <a href="newsDetail.html"></a>
                <Image
                  src={photo5204902}
                  alt="臺版AI對話引擎年底釋大模型，奠定商業版發展基礎"
                />
                <div className="btn">
                  <Image src={btnNextArrow} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>
                  <a href="newsDetail.html">
                    臺版AI對話引擎年底釋大模型，奠定商業版發展基礎
                  </a>
                </h3>
                <div className="date">2023.06.14</div>
                <div className="tagUnit secondary">TAIDE新聞</div>
              </div>
            </div>
            <div className="newsListUnit__item">
              <div className="photo">
                <a href="newsDetail.html"></a>
                <Image
                  src={photo5204903}
                  alt="TAIDE對話引擎初步成果發表，產官學齊聚見證"
                />
                <div className="btn">
                  <Image src={btnNextArrow} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>
                  <a href="newsDetail.html">
                    TAIDE對話引擎初步成果發表，產官學齊聚見證
                  </a>
                </h3>
                <div className="date">2023.06.14</div>
                <div className="tagUnit secondary">TAIDE新聞</div>
              </div>
            </div>
            <div className="newsListUnit__item">
              <div className="photo">
                <a href="newsDetail.html"></a>
                <Image
                  src={photo5204904}
                  alt="臺版AI對話引擎年底釋大模型，奠定商業版發展基礎"
                />
                <div className="btn">
                  <Image src={btnNextArrow} alt="arrow" />
                </div>
              </div>
              <div className="infoCon">
                <h3>
                  <a href="newsDetail.html">
                    臺版AI對話引擎年底釋大模型，奠定商業版發展基礎
                  </a>
                </h3>
                <div className="date">2023.06.14</div>
                <div className="tagUnit secondary">TAIDE新聞</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      ></script>
    </>
  );
};

export default Home;
