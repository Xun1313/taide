const CourseUnit = () => {
  return (
    <article className="courseUnit">
      <div className="courseUnit__body">
        <h2>重點研發與活動歷程</h2>
        <div className="courseUnit__list">
          <div className="courseUnit__item">
            <div className="date">
              <span className="year">113</span>
              <span className="month">
                5<u>/</u>10
              </span>
            </div>
            <div className="con">
              <h3>TAIDE計畫持續精進</h3>
              <p>
                TAIDE接續計畫啟動，將透過資料平台、模型鑄造與應用服務推廣，持續蒐集多元資料、增加多模態的模型訓練，並進行教育、醫療和法律等應用之發展與示範，持續加值模型價值。
              </p>
            </div>
          </div>
          <div className="courseUnit__item">
            <div className="date">
              <span className="year">113</span>
              <span className="month">
                5<u>/</u>03
              </span>
            </div>
            <div className="con">
              <h3>TAIDE成果發表會</h3>
              <p>
                TAIDE計畫歷經一年，開發出基於Llama2的可商用TAIDE
                LX-7B模型、可學研用的TAIDE LX-13B模型，以及可商用的Llama
                3-TAIDE-LX-8B-Chat-Alpha1等三種版本，特舉辦成果發表會，並邀請合作夥伴展示各種TAIDE應用成果。
              </p>
            </div>
          </div>
          <div className="courseUnit__item">
            <div className="date">
              <span className="year">113</span>
              <span className="month">
                4<u>/</u>29
              </span>
            </div>
            <div className="con">
              <h3>Llama3-TAIDE-LX-8B釋出</h3>
              <p>
                113/4/19 Meta 公布
                Llama3，TAIDE團隊僅花四天時間完成模型之訓練及經過基本驗測，並循程序獲得國科會同意後於公開釋出以Llama3為基底的Llama
                3-TAIDE-LX-8B-Chat-Alpha1模型搶先版。
              </p>
            </div>
          </div>
          <div className="courseUnit__item">
            <div className="date">
              <span className="year">113</span>
              <span className="month">
                4<u>/</u>15
              </span>
            </div>
            <div className="con">
              <h3>TAIDE-LX-7B釋出</h3>
              <p>
                於TAIDE官網與TAIDE
                huggingface釋出TAIDE-LX-7B模型，其強項在協助自動摘要、寫信、寫文章、中翻英、英翻中等辦公室日常任務。訓練模型所使用的文本資料係經由TAIDE團隊與政府單位和民間出版社洽商，合法取得授權之資料。
              </p>
            </div>
          </div>
          <div className="courseUnit__item">
            <div className="date">
              <span className="year">113</span>
              <span className="month">
                2<u>/</u>02
              </span>
            </div>
            <div className="con">
              <h3>人人都是AI導師合作宣傳活動</h3>
              <p>
                與社團法人臺灣跨界共創協會合作，讓教師透過資料平台上傳資料與應用工作坊，期望未來結合教學進行擴散，成為結合教育應用推廣的基礎。
              </p>
            </div>
          </div>
          <div className="courseUnit__item">
            <div className="date">
              <span className="year">112</span>
              <span className="month">
                10<u>/</u>30
              </span>
            </div>
            <div className="con">
              <h3>TAIDE公部門應用工作坊</h3>
              <p>
                結合專家演講及實體工作坊，邀請中央部會了解生成式AI之技術特點與應用情境，及導入TAIDE需做什麼準備、發想應用可能性與嘗試提案。
              </p>
            </div>
          </div>
          <div className="courseUnit__item">
            <div className="date">
              <span className="year">112</span>
              <span className="month">
                8<u>/</u>18
              </span>
            </div>
            <div className="con">
              <h3>參與LLM產學技術交流會</h3>
              <p>
                TAIDE 團隊在國立陽明交通大學舉辦的LLM
                產學技術交流會與外界交流，參與技術攤位展示，介紹有關TAIDE發展和應用的主題。
              </p>
            </div>
          </div>
          <div className="courseUnit__item">
            <div className="date">
              <span className="year">112</span>
              <span className="month">
                6<u>/</u>14
              </span>
            </div>
            <div className="con">
              <h3>第一次成果展現</h3>
              <p>
                以Meta
                Llama2為基底，加入繁中語料進行模型訓練，召開「TAIDE計畫第一階段成果說明記者會」，對外說明計畫架構與方向，並展示TAIDE
                7B模型。
              </p>
            </div>
          </div>
          <div className="courseUnit__item">
            <div className="date">
              <span className="year">112</span>
              <span className="month">
                4<u>/</u>27
              </span>
            </div>
            <div className="con">
              <h3>TAIDE啟動</h3>
              <p>國科會正式啟動可信任生成式AI發展先期計畫(TAIDE)。</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseUnit;
