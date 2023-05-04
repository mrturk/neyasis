import CloseIcon from "@/public/assets/icons/CloseIcon";
import DocIcon, { DocXIcon } from "@/public/assets/icons/DocIcon";
import styles from "@/styles/ProfileInfoOther.module.css";

const ProfileInfoOther = ({ title, icon, data, edit }) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>{title}</span>
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "16px" }}
              >
                {item.includes("docx") ? (
                  <div>
                    <DocXIcon />
                  </div>
                ) : (
                  <div>{icon}</div>
                )}

                <div>
                  <span className={styles.text}>{item}</span>
                </div>
              </div>
              <div>
                <CloseIcon />
              </div>
            </div>
          );
        })}
      </div>
      {edit && (
        <div>
          <a className={styles.edit}>{edit}</a>
        </div>
      )}
    </div>
  );
};

export default ProfileInfoOther;
