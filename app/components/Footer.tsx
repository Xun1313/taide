import Image from "next/image";
import Link from "next/link";
import logoW from "~/images/logo_w.svg";
import logoNstc from "~/images/logo_NSTC.png";
import logoNarlabs from "~/images/logo_NARlabs.png";

const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer__body">
        <div className="logo">
          <a style={{ cursor: "pointer" }}>
            <Image src={logoW} style={{ height: "auto" }} alt="TAIDE" />
          </a>
        </div>
        <div className="sitemapUnit desktop">
          <div className="sitemapUnit__body">
            <div className="sitemapUnit__item">
              <h3>研發團隊</h3>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList#tag1`}
                >
                  模型鑄造組
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList#tag2`}
                >
                  應用領域組
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList#tag3`}
                >
                  其他
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList#tag4`}
                >
                  前期參與
                </Link>
              </p>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/resourcesList`}
                >
                  學習資源
                </Link>
              </h3>
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/newsList`}>
                  最新動態
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/training-data`}
                >
                  訓練資料
                </Link>
              </h3>
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/download-model`}
                >
                  TAIDE模型
                </Link>
              </h3>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/download-model`}
                >
                  條款與許可協議
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="sitemapUnit mobile">
          <div className="sitemapUnit__body">
            <div className="sitemapUnit__item">
              <h3>研發團隊</h3>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList#tag1`}
                >
                  模型鑄造組
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList#tag2`}
                >
                  應用領域組
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList#tag3`}
                >
                  其他
                </Link>
              </p>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/teamList#tag4`}
                >
                  前期參與
                </Link>
              </p>
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/resourcesList`}
                >
                  學習資源
                </Link>
              </h3>
            </div>
            <div className="sitemapUnit__item">
              <h3>
                <Link href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/newsList`}>
                  最新動態
                </Link>
              </h3>
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/training-data`}
                >
                  訓練資料
                </Link>
              </h3>
              <h3>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/download-model`}
                >
                  TAIDE模型
                </Link>
              </h3>
              <p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/download-model`}
                >
                  條款與許可協議
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="partnerUnit">
          <div className="partnerUnit__item">
            <h3>指導單位</h3>
            <div>
              <a href="https://www.nstc.gov.tw/" rel="noopener noreferrer">
                <Image src={logoNstc} style={{ width: "auto" }} alt="NSTC" />
              </a>
            </div>
          </div>
          <div className="partnerUnit__item">
            <h3>執行單位</h3>
            <div>
              <a href="https://www.narlabs.org.tw/" rel="noopener noreferrer">
                <Image
                  src={logoNarlabs}
                  style={{ width: "auto" }}
                  alt="NARlabs"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>
            ©財團法人國家實驗研究院 {new Date().getFullYear()} All Rights
            Reserved.
          </span>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
