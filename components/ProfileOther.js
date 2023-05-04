import CheckIcon from "@/public/assets/icons/CheckIcon";
import styles from "@/styles/ProfileOther.module.css";

const ProfileOther = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <div className={styles.wrapTitle} key={index}>
            <div>
              <CheckIcon />
            </div>
            <div>
              <span className={styles.title}>{item}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProfileOther;
