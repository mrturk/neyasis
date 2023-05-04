import styles from "@/styles/ProfileExperiance.module.css";

const ProfileExperiance = ({
  title,
  companyTitle,
  date,
  location,
  description,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ marginBottom: "5px" }}>
        <span className={styles.title}>{title}</span>
      </div>
      <div style={{ marginBottom: "10px" }} className={styles.container}>
        <div>
          <span className={styles.companyTitle}>{companyTitle}</span>
        </div>
        <div>
          <span className={styles.date}>{date}</span>
        </div>
        <div>
          <span className={styles.location}>{location}</span>
        </div>
      </div>
      <div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
export default ProfileExperiance;
