import styles from "@/styles/ProfileCertificate.module.css";

const ProfileCertificate = ({ title, company, date }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.contentWrapper}>
        <div>
          <span className={styles.contentText}>{company}</span>
        </div>
        <div>
          <span className={styles.contentText}>{date}</span>
        </div>
      </div>
    </div>
  );
};
export default ProfileCertificate;
