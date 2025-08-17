import styles from "./generalNews.module.css";
export default function GeneralNews() {
  return (
    <div>
      <h1 className={styles["general-news-container-name"]}>Breaking News</h1>
      <div className={styles["general-news-container"]}>
        <div className={styles["general-news-presentation"]}>
          <div className={styles["general-news-left-part"]}>
            <img
              src="/images/news.jpg"
              alt="news"
              className={styles["general-news-left-part-img"]}
            />
          </div>
          <div className={styles["general-news-right-part"]}>
            <h4>Materials,Baking Soda</h4>
            <p>
              Czech firefighters tackle large toxic train fire A train
              transporting benzene, a carcinogen, derailed and caught fire on
              Friday, prompting a large emergency response.
            </p>
            <div className={styles["general-news-details"]}>
              <p className={styles["general-news-hour"]}>2 hours</p>
              <p className={styles["general-news-loc"]}>Europe</p>
            </div>
          </div>
        </div>
        <div>
          <p className={styles["general-news-additionals"]}>
            What We Do: Shine a Light on Overlooked Issues: We uncover and
            amplify What We Do: Shine a Light on Overlooked Issues: We uncover
            and amplify the often-unspoken problems that hinder sustainable
            growth and innovation. Promote Collaborative Solutions: By bringing
            together thought leaders, changemakers, and innovators from diverse
            fields, we co-create strategies that drive lasting impact. Inspire
            Action: Through thought-provoking discussions, insights, and case
            studies, we empower individuals and organizations to take meaningful
            steps toward a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}
