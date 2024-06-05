import { WithContext } from "schema-dts";
import Image from "next/image";
import btnNextArrow from "~/images/icon/btn_nextArrow.svg";
import btnDownArrow from "~/images/icon/btn_downArrow.svg";
import bg_download from "~/images/download/bg_download.png";
import Navigation from "./components/Navigation";
import AlertPopup from "./components/AlertPopup";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "模型版本下載 - TAIDE推動臺灣可信任生成式AI發展計畫",
  description:
    "完整指南解鎖TAIDE模型版本的下載及應用秘密。讓AI技能升級，迅速上手與實踐！",
  openGraph: {
    description:
      "完整指南解鎖TAIDE模型版本的下載及應用秘密。讓AI技能升級，迅速上手與實踐！",
  },
};

const DownloadModel = () => {
  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "完整指南解鎖TAIDE模型版本的下載及應用秘密。讓AI技能升級，迅速上手與實踐！",
    additionalName:
      "完整指南解鎖TAIDE模型版本的下載及應用秘密。讓AI技能升級，迅速上手與實踐！",
    url: process.env.WEBSITE_DOMAIN,
    datePublished: "2023-03-02",
  };

  return (
    <>
      <article className="downloadUnit">
        <div className="downloadUnit__body">
          <div className="cardDownload">
            <div className="cardDownload__item max">
              <h1>TAIDE模型</h1>
              <div className="photo">
                <Image src={bg_download} alt="TAIDE模型" />
              </div>
            </div>
            <div className="cardDownload__item">
              <Navigation />
            </div>
          </div>

          <div className="downloadDetail">
            <div className="downloadDetail__left">
              <div className="article__item terms">
                <h2>·Llama3-TAIDE 模型社群授權同意書</h2>
                <div className="article__con">
                  <p>前言</p>
                  <p>
                    財團法人國家實驗研究院(以下稱「國研院」)開發並建置
                    Llama3-TAIDE 模型,當您取得或開始使用 Llama3-TAIDE
                    模型及其材料(以下合稱「TAIDE L
                    類模型」)時,即表示您已閱讀、瞭解並同意接受本社群授權同意書的所有內容。如果您不同意本社群授權同意書的內容,或者您適用的國家、地區排除本社群授權同意書部分或全部的內容時,您應即停止使用TAIDE
                    L 類模型。
                  </p>
                  <h3>一、定義</h3>
                  <p>
                    <span>1.</span>
                    <span>
                      授權同意:係指符合本社群授權同意書的條件下,國研院同意您得以使用、重製、修改、散布等方式利用
                      TAIDE L 類模型。
                    </span>
                  </p>
                  <p>
                    <span>2.</span>
                    <span>
                      授權方:係指對於 TAIDE L
                      類模型享有所有權及智慧財產權的法律主體。本社群授權同意書下的授權方是國研院,或經國研院授權可對第三方再授權的個人或其他法律主體。
                    </span>
                  </p>
                  <p>
                    <span>3.</span>
                    <span>
                      您
                      (或「您的」):係指本社群授權同意書下的被授權人,得行使本社群授權同意書所授予的權利或/及基於任何目的、於任何領域利用、取用
                      TAIDE L 類模型的個人或其他法律主體。
                    </span>
                  </p>
                  <p>
                    <span>4.</span>
                    <span>
                      第三方:係指「授權方」、「您」以外的任何個人或其他法律主體。
                    </span>
                  </p>
                  <p>
                    <span>5.</span>
                    <span>
                      TAIDE L 類模型:TAIDE L
                      類模型是一個人工智慧的語言與對話基礎模型、軟體與演算法,包含機器學習模型程式碼、訓練所得模型之參數、驅動程式碼等,您得以自有或有權使用的內容、資料以上述材料進行調整或修正,以發展成符合您自身需求的系統或模型。
                    </span>
                  </p>
                  <p>
                    <span>6.</span>
                    <span>
                      衍生模型:係指您將 TAIDE L
                      類模型的參數或輸出模式遷移而建置的其他模型、透過使用 TAIDE
                      L 類模型產生合成資料訓練而成的其他模型、或對於 TAIDE L
                      類模型進行修改或變更以建置與 TAIDE L
                      類模型具有相似效能的其他模型。
                    </span>
                  </p>
                  <p>
                    <span>7.</span>
                    <span>
                      個人資料:係指得以直接或間接方式識別特定自然人之資料。個人資料的處理包括但不限於記錄、輸入、儲存、編輯、更正、複製、檢索、刪除、輸出、連結或內部傳送等方式。
                    </span>
                  </p>
                  <h3>二、授權同意與使用限制</h3>
                  <p>
                    <span>1.</span>
                    <span>
                      在合乎本社群授權同意書的前提下,國研院特此授予您一個【非專屬性、全球性、不可轉讓的、不可再授權的、無償的】授權同意。
                    </span>
                  </p>
                  <p>
                    <span>2.</span>
                    <span>
                      您清楚知悉 TAIDE L 類模型是基於 Meta AI 之「Llama 3
                      模型」, 該模型相關授權限制條件與規範 (包括但不限於 META AI
                      Llama 3 Community License Agreement、META AI Acceptable
                      Use Policy、Meta brand resources and
                      guidelines),請參考:https://ai.meta.com/llama/。您應自行上線閱覽並同意遵守前述限制條件及規範。
                    </span>
                  </p>
                  <p>
                    <span>3.</span>
                    <span>
                      您可以在您所建置的衍生模型中添加新的智慧財產權聲明,並可以為您的衍生模型提供不同於本社群授權同意書的條件,但前提是您必須確保衍生模型的使用、重製等條件不得牴觸本社群授權同意書。
                    </span>
                  </p>
                  <p>
                    <span>4.</span>
                    <span>
                      您得依法對於衍生模型享有相關權利,但您必須滿足以下的條件,若有違反,您依本社群授權同意書下所取得的授權同意即行終止;
                    </span>
                  </p>
                  <div className="ml-1">
                    <p>
                      (1)
                      您不得出於任何軍事或非法目的使用、重製、修改、變更或建置與
                      TAIDE L 類模型相關的全部或部分衍生模型;
                    </p>
                    <p>
                      (2) 您因為修改、變更 TAIDE L
                      類模型所得到的衍生模型,必須以顯著的方式說明或指出修改的內容,且上述修改不得違反本社群授權同意書下的授權限制條件;
                    </p>
                    <p>
                      (3) 您對於 TAIDE L
                      類模型的修改或任何使用行為(包括但不限於使用 TAIDE L
                      類模型所得的衍生模型)不得違反中華民國法令或其他國家、國際組織適用法律(包括但不限於歐盟人工智慧法案)之要求,亦不得損害國研院或任何第三方之權利(包括但不限於肖像權、名譽權、隱私權等人格權,著作權、專利權、營業秘密等智慧財產權或者其他財產權);
                    </p>
                    <p>
                      (4)
                      如果您將您的衍生模型向您的使用者或接收者為重製、公開口述、公開播送、公開演出、公開傳輸、公開展示、改作、編輯、散布及出租等行為,您應向您的使用者或接收者提供本社群授權同意書之副本,並促其遵守本社群授權同意書的所有規範;
                    </p>
                    <p>
                      (5)
                      除非取得國研院事前書面同意的,您不得聲稱為國研院或國研院的代理人、受僱人、合作廠商或其他未經國研院明示同意的身分,您亦不得聲稱為
                      TAIDE L 類模型之所有權人。
                    </p>
                    <p>
                      (6) 您僅得於國研院或國研院授權的網站上取用 TAIDE L
                      類模型。
                    </p>
                    <p>
                      (7)
                      您不能以任何方式自行或允許、協助第三方違反本社群授權同意書下的限制或規範。
                    </p>
                  </div>
                  <h3>三、智慧財產權</h3>
                  <p>
                    <span>1.</span>
                    <span>
                      您就利用 TAIDE L
                      類模型而創作之衍生模型,依法享有該衍生作品之智慧財產權(包括但不限於著作人格權與著作財產權),惟您亦知悉該衍生作品之保護,不影響國研院就原作品即
                      TAIDE L 類模型所享有的既有權利。
                    </span>
                  </p>
                  <p>
                    <span>2.</span>
                    <span>
                      您充分理解並同意,您如因使用、改作或變更 TAIDE L
                      類模型之內容、形式或名目而發生任何法律爭議(包括但不限於誹謗、抄襲等侵害他人著作權或其他侵權情事)或您遭使用者或第三方對您提起訴訟、消費爭議等相類情事,均應由您自行承擔一切相關之法律責任。相對地,國研院如因此蒙受任何損害,國研院亦得向您請求損害賠償。
                    </span>
                  </p>
                  <h3>四、商標</h3>
                  <p>
                    除非係合理使用的,您不得任意使用國研院的任何商標、服務標章、網站名稱或其他作品名稱(以下合稱為「標識」)。除取得國研院事前書面同意外,您不得將前述的標識以單獨或結合的方式展示、使用或以之在任何國家或地區申請商標註冊;您也不得向他人明示或暗示享有展示、使用或處分前述標識的權利。倘因您違反本條規定而造成國研院或第三方的損害,您應自行承擔相關的法律責任。
                  </p>
                  <h3>五、免責聲明與責任限制</h3>
                  <p>
                    <span>1.</span>
                    <span>
                      除非適用法律要求的,國研院依本社群授權同意書所提供的服務都是按「現狀」及「原樣」方式提供之。國研院在此明確聲明,國研院並未提供任何種類之明示或默示性保證與條件,包括但不限於適銷性、可獲利性、特殊用途之適用性及非侵權或所有權等擔保。您充分理解並同意,您應當自行承擔使用、修改
                      TAIDE L 類模型的所有風險,且您應自行確認使用 TAIDE L
                      類模型或散布衍生模型的適法性,並承擔與此相關的法律責任。
                    </span>
                  </p>
                  <p>
                    <span>2.</span>
                    <span>
                      您充分理解並同意,國研院或國研院的代理人、使用人、受僱人、隸屬單位、合作單位對於您使用、修改
                      TAIDE L
                      類模型所生之損害或損失均不負賠償責任,縱然國研院已接獲通知或已知曉發生上開損害或損失之可能性,亦同。相對地,若因為您違法或違反本社群授權同意書使用
                      TAIDE L
                      類模型而導致國研院遭受任何損害或損失,國研院將有權向您請求承擔全部的賠償責任。
                    </span>
                  </p>
                  <p>
                    <span>3.</span>
                    <span>
                      縱然國研院在 TAIDE L 類模型訓練的所有階段,都盡力維護 TAIDE
                      L
                      類模型的合法性和準確性,惟因受限於偵測保護機制,這將有可能減損
                      TAIDE L
                      類模型的輸出結果的準確性。因此,國研院在此明確聲明,國研院不承擔您因使用
                      TAIDE L 類模型及其原始程式碼而導致的資料安全問題或任何涉及
                      TAIDE L
                      類模型被誤導、誤用、不正當或不合法使用而產生的任何風險和責任。
                    </span>
                  </p>
                  <p>
                    <span>4.</span>
                    <span>
                      您充分理解並同意,國研院並未向您保證或承諾 TAIDE L
                      類模型將符合您自身需求,您必須自行訓練、改善或優化您的衍生模型,並獨自承擔由此可能產生的任何風險和後果。
                    </span>
                  </p>
                  <p>
                    <span>5.</span>
                    <span>
                      您充分理解並同意,您將遵守所有適用的法令以進行個人資料的處理,尤其是遵守個人資訊保護法的相關規定。敬請注意,縱使國研院依本社群授權同意書授予您使用
                      TAIDE L
                      類模型的權利,然而這並不代表您已經獲得處理相關個人資料的授權。您作為獨立的個人資料處理者,須自行確認及遵循相關法令的要求。
                    </span>
                  </p>
                  <p>
                    <span>6.</span>
                    <span>
                      您充分理解並同意,除了上述的條款的,國研院仍有權判斷您是否有其他違反有關法令或本社群授權同意書的行為,進而採取適當的法律對策。除此之的,國研院有權通知相關的政府單位,倘若有此類情形,您應獨自承擔由此而產生的一切法律責任。
                    </span>
                  </p>
                  <p>
                    <span>7.</span>
                    <span>
                      您充分理解並同意,您將對 TAIDE L
                      類模型的使用及衍生模型所涉及的智慧財產權風險或與之相關的任何損害或損失負責。
                    </span>
                  </p>
                  <p>
                    <span>7.</span>
                    <span>
                      您充分理解並同意,您將對 TAIDE L
                      類模型的使用及衍生模型所涉及的智慧財產權風險或與之相關的任何損害或損失負責。
                    </span>
                  </p>
                  <p>
                    <span>8.</span>
                    <span>本社群授權同意書所稱損害或損失係指:</span>
                  </p>
                  <div className="ml-1">
                    <p>(1) 收入損失;</p>
                    <p>(2) 實際或預期利潤損失;</p>
                    <p>(3) 預期節約損失;</p>
                    <p>(4) 業務損失;</p>
                    <p>(5) 機會損失;</p>
                    <p>(6) 商譽、聲譽損失;或</p>
                    <p>(7) 任何間接性或衍生性損害或損失。</p>
                  </div>
                  <h3>六、自願接受額的義務的情形</h3>
                  <p>
                    您於散布衍生模型之時,您可以選擇向您的使用者或接收者提供保固、技術支援、保證、賠償或其他約定義務,並得選擇向您的使用者或接收者收取費用。然而,您充分理解並同意,您在接受此類義務時,您無權代表國研院,國研院並不因您自願接受此類額的義務、同意賠償或其他相類情形而負擔任何義務或責任。
                  </p>
                  <h3>七、品牌曝光與標識 TAIDE L 類模型的義務</h3>
                  <p>
                    如果您將您以 TAIDE L
                    類模型為基礎而建置的衍生模型在中華民國境內(的)提供使用授權或是參加任何中華民國境內(的)組織、個人舉辦的排名比賽(包括但不限於對於模型演算法準確度、效能等面向評比)的話,您必須在該模型說明中以顯著方式標識您的衍生模型係基於
                    TAIDE L 類模型而進行的衍生作品。
                  </p>
                  <h3>八、期限與終止</h3>
                  <p>
                    本社群授權同意書自您接受本社群授權同意書或利用、取用 TAIDE L
                    類模型起生效,並將持續有效。若發生您有違反本社群授權同意書的任何條款或條件,國研院有權終止本社群授權同意書。本社群授權同意書終止後,您應刪除並停止使用
                    TAIDE L 類模型,惟第三條仍持續有效。
                  </p>
                  <h3>九、其他</h3>
                  <p>
                    <span>1.</span>
                    <span>
                      您可以隨時檢視本社群授權同意書的最新版本。本社群授權同意書的修訂將在發布之時立即生效,您若於變更生效日期後繼續使用
                      TAIDE L 類模型,此即表示您同意遵守修改後的所有條款與條件。
                    </span>
                  </p>
                  <p>
                    <span>2.</span>
                    <span>
                      倘因本社群授權同意書或因使用 TAIDE L
                      類模型所生之爭議對國研院或第三人提起訴訟,您依本社群授權同意書所獲得的授權同意將自提起訴訟之日起自動終止之。
                    </span>
                  </p>
                  <p>
                    <span>3.</span>
                    <span>
                      準據法與管轄權:本社群授權同意書所發生的爭議,應以中華民國法律為準據法,並以臺灣臺北地方法院為管轄法院。
                    </span>
                  </p>
                  <p>
                    <span>4.</span>
                    <span>
                      英文譯本僅供參考，文義如與中文版有歧異，概以中文版為準。
                    </span>
                  </p>
                  <br />
                  <br />

                  <p>參考來源：</p>
                  <div className="sources">
                    Meta AI Llama3 Acceptable Use Policy{" "}
                    <a
                      href="https://llama.meta.com/llama3/use-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://llama.meta.com/llama3/use-policy/
                    </a>
                  </div>
                  <div className="sources">
                    Meta AI Llama3 Community License Agreement{" "}
                    <a
                      href="https://llama.meta.com/llama3/license/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://llama.meta.com/llama3/license/
                    </a>
                  </div>
                  <br />
                  <br />
                  <p>補充 : </p>
                  <div className="sources">
                    Llama3-TAIDE 模型社群授權同意書適用於以下釋出模型 :
                    TAIDE-LX-7B、Llama3-TAIDE-LX-8B
                  </div>
                </div>
              </div>
              <div className="downloadDetail__right download mobile">
                <h2>·模型版本下載</h2>
                <div
                  className="downloadDetail__table"
                  style={{ padding: "4vw 4vw 10vw" }}
                >
                  <table>
                    <tbody>
                      <tr>
                        <th>模型版本</th>
                        <th>釋出日期</th>
                        <th>Context Length</th>
                      </tr>
                      <tr>
                        <td>Llama3-TAIDE-LX-8B</td>
                        <td>2024/04/29</td>
                        <td>8K</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th colSpan={3} className="link">
                          <a
                            href="https://huggingface.co/taide"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Huggingface{" "}
                            <Image
                              src={btnNextArrow}
                              style={{ height: "auto" }}
                              alt="arrow"
                            />
                          </a>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={3} className="link">
                          <a
                            href="https://github.com/taide-taiwan"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github{" "}
                            <Image
                              src={btnNextArrow}
                              style={{ height: "auto" }}
                              alt="arrow"
                            />
                          </a>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div className="downloadDetail__right download mobile">
                <h2>·模型版本</h2>
                <div
                  className="downloadDetail__table"
                  style={{ padding: "4vw 4vw 10vw" }}
                >
                  <table>
                    <tbody>
                      <tr>
                        <th>模型版本</th>
                        <th>釋出日期</th>
                        <th>Tokens</th>
                      </tr>
                      <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn">
                    <a>
                      <span>Huggingface 連結</span>
                      <Image
                        src={btnDownArrow}
                        style={{ height: "auto" }}
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
              </div> */}
              <div className="article__item even">
                <h2>·TAIDE合作模式</h2>
                <div className="article__con">
                  <h3>TAIDE誠徵合作夥伴，共同促進臺灣 LLM 的發展</h3>
                  <p>
                    <b>
                      我們正在積極的尋求合作夥伴，誠摯地邀請業界、學術界以及具備相關技術專業知識的任何有志之士參與這項具有里程碑意義性的合作！
                    </b>
                  </p>
                  <p>
                    TAIDE
                    旨在以臺灣文化為基底，融入臺灣特有的語言、價值觀、風俗習慣等元素，使生成式AI引擎能夠更好地理解和回應在地使用者的需求，打造可信任的生成式AI引擎基礎模型，並應用於不同領域，以滿足使用者多元化的需求。
                  </p>
                  <p>
                    合作基礎方案將由TAIDE提供一大型語言模型，為合作夥伴支援一個強大的工具，以應用於各種領域，包括自然語言處理、機器翻譯、智慧客服或更多創意的可能性。
                  </p>
                  <p>
                    TAIDE代表一個全新的機會，促進技術的進步和應用的拓展，並為合作夥伴和整個社會帶來實際的價值和成果。我們期待聽到來自世界各地的有志之士的回應，共同探索LLM的無限潛力。
                  </p>
                  <br />
                  <p>
                    <b>
                      如果您或您的組織對這個合作計畫感興趣，請聯繫我們以獲取更多詳細資訊與討論合作的可能性。
                    </b>
                  </p>
                  <p>
                    TAIDE專案團隊:{" "}
                    <a href="mailto:TAIDE@narlabs.org.tw">
                      TAIDE@narlabs.org.tw
                    </a>
                  </p>
                  <br />
                  <ul>
                    <li className="hd">TAIDE 會提供什麼?</li>
                    <li>
                      大型語言模型：提供一70億參數之大型語言模型，以協助合作夥伴實現其應用項目的目標。
                    </li>
                    <li>
                      技術支援和培訓：提供技術交流、知識分享、相關技術支援和培訓，以確保合作夥伴能夠順利導入和使用。
                    </li>
                    <li>
                      保密和安全管理：TAIDE將與合作夥伴簽署明確的合作協議，以保護合作夥伴的權益和智慧財產權，包括資料使用權限、智慧財產權歸屬、機密保護等方面的內容。
                    </li>
                  </ul>
                  <br />
                  <ul>
                    <li className="hd">合作夥伴需要準備什麼?</li>
                    <li>
                      資料集要求：合作夥伴需要能夠自行提供資料集，作為訓練和Fine-tuning模型的基礎，確保模型在實務應用中具有合適的資料支持。
                    </li>
                    <li>
                      相關資訊能力：合作夥伴應具備相關資訊能力與資源，包括資料處理、模型訓練專業知識與算力資源等，以確保資料集的品質和安全性。
                    </li>
                    <li>
                      應用提案：合作夥伴需提供相容TAIDE模型之合作方案，並符合推動生成式
                      AI 技術的發展和應用之目的。
                    </li>
                  </ul>
                  <br />
                  <br />
                  <p>
                    以下類型之應用，將會是TAIDE優先徵求項目，但當然，TAIDE永遠歡迎更多的創意加入:
                  </p>
                  <ul>
                    <li>自動化知識庫管理</li>
                    <li>軟體新聞翻譯工具</li>
                    <li>多語言支援工具</li>
                    <li>AI客服</li>
                    <li>API service</li>
                    <li>Web service</li>
                  </ul>
                </div>
              </div>

              <div className="article__item FAQ">
                <h2>·TAIDE模型使用常見問題</h2>
                <div className="article__con">
                  <p>
                    TAIDE模型常見問題集{" "}
                    <a
                      href="https://drive.google.com/file/d/13EFO7MtqqOx_Rs7vzzZTdGdycqrz3qk_/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ wordBreak: "break-all" }}
                    >
                      https://drive.google.com/file/d/13EFO7MtqqOx_Rs7vzzZTdGdycqrz3qk_/view
                    </a>
                  </p>
                </div>
              </div>
              <div className="article__item Benchmark">
                <h2>·五大任務 benchmark 下載</h2>
                <div className="article__con">
                  <p>
                    為評測TAIDE模型五大任務的表現，我們讓TAIDE模型做評測題目(五大任務共500題)，並用ChatGPT-4進行評分。五大任務的評測內容包含中翻英、英翻中、自動摘要、文章撰寫與信件撰寫。相關評測資料來源與評測程式碼資訊如下。
                  </p>
                  <p>
                    評測資料連結{" "}
                    <a
                      href="https://huggingface.co/datasets/taide/taide-bench"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://huggingface.co/datasets/taide/taide-bench
                    </a>
                  </p>
                  <p>
                    評測方法程式碼{" "}
                    <a
                      href="https://github.com/taide-taiwan/taide-bench-eval"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/taide-taiwan/taide-bench-eval
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="downloadDetail__right download desktop">
              <h2>·模型版本下載</h2>
              <div className="downloadDetail__table">
                <table>
                  <tbody>
                    <tr>
                      <th>模型版本</th>
                      <td>Llama3-TAIDE-LX-8B</td>
                    </tr>
                    <tr>
                      <th>釋出日期</th>
                      <td>2024/04/29</td>
                    </tr>
                    <tr>
                      <th>Context Length</th>
                      <td>8K</td>
                    </tr>
                    <tr>
                      <th></th>
                      <td></td>
                    </tr>
                    <tr>
                      <th colSpan={2} className="link">
                        <a
                          href="https://huggingface.co/taide"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Huggingface{" "}
                          <Image
                            src={btnNextArrow}
                            style={{ height: "auto" }}
                            alt="arrow"
                          />
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={2} className="link">
                        <a
                          href="https://github.com/taide-taiwan"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github{" "}
                          <Image
                            src={btnNextArrow}
                            style={{ height: "auto" }}
                            alt="arrow"
                          />
                        </a>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <div className="downloadDetail__right download desktop">
              <h2>·模型版本</h2>
              <div
                className="downloadDetail__table"
                style={{ padding: "1vw 1vw 6vw" }}
              >
                <table>
                  <tbody>
                    <tr>
                      <th>模型版本</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>釋出日期</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>Tokens</th>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn">
                  <a>
                    <span>Huggingface 連結</span>
                    <Image
                      src={btnDownArrow}
                      style={{ height: "auto" }}
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </article>
      <article className="contactUnit download">
        <article className="contactUnit__body">
          <h2>
            <span>有任何想法？</span>
            <span>歡迎與我們聯絡</span>
          </h2>
          <div className="btn">
            <a href="mailto:TAIDE@narlabs.org.tw">
              <span>Contact TAIDE</span>
              <Image
                src={btnNextArrow}
                style={{ height: "auto" }}
                alt="about"
              />
            </a>
          </div>
        </article>
      </article>

      <AlertPopup />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      ></script>
    </>
  );
};

export default DownloadModel;
