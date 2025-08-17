import styles from "./breakingnews.module.css";
export default function BreakingNews() {
  return (
    <div className={styles["breaking-news-general-container"]}>
      <h3 className={styles["breaking-news-general-container-name"]}>
        Breaking News
      </h3>
      <div className={styles["breaking-news-container"]}>
        <div className={styles["breaking-news-left-part"]}>
          <img
            className={styles["breaking-news-left-img"]}
            src="/images/breaking-news.jpg"
            alt="materials"
          />
          <p className={styles["breaking-news-left-descp-main"]}>
            Materials,Baking Soda
          </p>
          <p className={styles["breaking-news-left-descp"]}>
            Czech firefighters tackle large toxic train fire A train
            transporting benzene, a carcinogen, derailed and caught fire on
            Friday, prompting a large emergency response.
          </p>
          <button className={styles["breaking-news-subscribe-btn"]}>
            Subscribe
          </button>
        </div>
        <div className={styles["breaking-news-right-part"]}>
          <div className={styles["breaking-news"]}>
            <div className={styles["breaking-news-left"]}>
              <img
                src="/images/news.jpg"
                alt="news-new"
                className={styles["breaking-news-img"]}
              />
            </div>
            <div className={styles["breaking-news-right"]}>
              <h4>Materials,Baking Soda</h4>
              <p>
                Czech firefighters tackle large toxic train fire A train
                transporting benzene, a carcinogen, derailed and caught fire on
                Friday, prompting a large emergency response.
              </p>
              <div className={styles["breaking-news-details"]}>
                <p className={styles["breaking-news-hour"]}>2 hours</p>
                <p className={styles["breaking-news-loc"]}>Europe</p>
              </div>
            </div>
          </div>
          <div className={styles["breaking-news"]}>
            <div className={styles["breaking-news-left"]}>
              <img
                src="/images/news.jpg"
                alt="news-new"
                className={styles["breaking-news-img"]}
              />
            </div>
            <div className={styles["breaking-news-right"]}>
              <h4>Materials,Baking Soda</h4>
              <p>
                Czech firefighters tackle large toxic train fire A train
                transporting benzene, a carcinogen, derailed and caught fire on
                Friday, prompting a large emergency response.
              </p>
              <div className={styles["breaking-news-details"]}>
                <p className={styles["breaking-news-hour"]}>2 hours</p>
                <p className={styles["breaking-news-loc"]}>Europe</p>
              </div>
            </div>
          </div>
          <div className={styles["breaking-news"]}>
            <div className={styles["breaking-news-left"]}>
              <img
                src="/images/news.jpg"
                alt="news-new"
                className={styles["breaking-news-img"]}
              />
            </div>
            <div className={styles["breaking-news-right"]}>
              <h4>Materials,Baking Soda</h4>
              <p>
                Czech firefighters tackle large toxic train fire A train
                transporting benzene, a carcinogen, derailed and caught fire on
                Friday, prompting a large emergency response.
              </p>
              <div className={styles["breaking-news-details"]}>
                <p className={styles["breaking-news-hour"]}>2 hours</p>
                <p className={styles["breaking-news-loc"]}>Europe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
