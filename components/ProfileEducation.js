import styles from "@/styles/ProfileEducation.module.css";

const ProfileEducation = ({ title, degre, faculty, date }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.contentWrapper}>
        <div>
          <span className={styles.contentText}>{degre}</span>
        </div>
        <div>
          <span className={styles.contentText}>{faculty}</span>
        </div>
        <div>
          <span className={styles.contentText}>{date}</span>
        </div>
      </div>
    </div>
  );
};
export default ProfileEducation;
