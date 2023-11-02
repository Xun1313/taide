import { WithContext } from "schema-dts";

import Image from "next/image";
import Link from "next/link";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";

import StageUnit from "~/components/StageUnit";
import PlanList from "~/components/PlanList";
import BannerSwiper from "~/components/BannerSwiper";
import NewsListUnitSwiper from "~/components/NewsListUnitSwiper";
import NewsResType from "~/newsList/types";
import { format } from "date-fns";
import { typeMapping } from "~/utils/common";

// import type { Metadata } from 'next'
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const Home = async () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "深入了解TAIDE計畫的背後策略、目標和里程碑。臺灣如何透過生成式AI技術，開創新的科技未來。",
    additionalName:
      "深入了解TAIDE計畫的背後策略、目標和里程碑。臺灣如何透過生成式AI技術，開創新的科技未來。",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };
  const newsListRes = await fetch(
    `${process.env.API_URL}/latest-updates?accessToken=TAIDE_!@%23qweASDzxc456RTYfgjVBN&frontSearchAll=&length=5&start=0`,
    {
      method: "POST",
      cache: "no-store",
    }
  );
  const { issuePlanList }: NewsResType.NewsListType = await newsListRes.json();

  return (
    <>
      <article className="bannerUnit">
        <div className="bannerUnit__body">
          <div className="bannerUnit__wrap">
            <div className="bannerUnit__left">
              <video width="320" height="240" autoPlay loop muted>
                <source src="/video/banner.mp4" type="video/mp4" />
              </video>
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
                  <a href="/teamList#tag3">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
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
                  <a href="/teamList#tag4">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
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
                  <a href="/teamList#tag5">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
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
                  <a href="/teamList#tag6">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
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
                <div className="btn">
                  <a href="/teamList#tag7">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </a>
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
                <div className="btn">
                  <a href="/teamList#tag8">
                    <span>了解更多</span>
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </a>
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
              <NewsListUnitSwiper bannerList={issuePlanList.slice(0, 2)} />
            </div>
            {issuePlanList.slice(2).map((e) => (
              <div className="newsListUnit__item" key={e.id}>
                <div className="photo">
                  <Link href={`/newsList/newsDetail/${e.id}`}></Link>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_NEWS_IMG_URL}/${e.id}`}
                    alt={e.title}
                    width={500}
                    height={500}
                  />
                  <div className="btn">
                    <Image src={btnNextArrow} style={{ height: "auto" }} alt="arrow" />
                  </div>
                </div>
                <div className="infoCon">
                  <h3>
                    <Link href={`/newsList/newsDetail/${e.id}`}>{e.title}</Link>
                  </h3>
                  {e.issueDate && (
                    <div className="date">
                      {format(new Date(e.issueDate), "yyyy.MM.dd")}
                    </div>
                  )}
                  {typeMapping[e.type] && (
                    <div className="tagUnit secondary">
                      {typeMapping[e.type]}
                    </div>
                  )}
                </div>
              </div>
            ))}
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
