import styles from "@/styles/ProfileHeader.module.css";

const ProfileHeader = ({ title, info = false }) => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <span
            className={styles.title}
            style={{ color: info ? " #4361ee" : "#5b6987" }}
          >
            {title}
          </span>
        </div>
        <div>
          <span className={styles.editText}>Düzenle</span>
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  );
};
export default ProfileHeader;
