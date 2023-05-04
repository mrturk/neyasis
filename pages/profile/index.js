import ProfileExperiance from "@/components/ProfileExperiance";
import ProfileHeader from "@/components/ProfileHeader";
import SearchBox from "@/components/SearchBox";
import styles from "@/styles/Profile.module.css";

const Index = () => {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <img
            style={{ width: "100%" }}
            src="assets/img/logo.png"
            className={styles.logo}
          />
        </div>
        <div className={styles.profileContainer}>
          <div>
            <div>
              <select className={styles.profileSelect}>
                <option>Eray Karakullukçu</option>
              </select>
            </div>
            <div style={{ textAlign: "end", paddingRight: "10px" }}>
              <span className={styles.profileContainerTitle}>
                findtalent’de Kurucu
              </span>
            </div>
          </div>
          <div style={{ width: "64px", height: "64px" }}>
            <img
              style={{ width: "100%", borderRadius: "50%" }}
              src="assets/img/pp.jpg"
              className={styles.logo}
            />
          </div>
        </div>
      </header>
      <div className={styles.searchBarContainer}>
        <div
          style={{
            maxWidth: "798px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SearchBox />
        </div>
        <div>
          <button className={styles.searchButton}>
            <img src="assets/img/group-6.png" />
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <section className={styles.containerLeft}>
          <div className={styles.flexBoxProfile}>
            <div className={styles.profilePictureEdit}></div>
            <div id="profile-edit-info">
              <div style={{ marginBottom: "13px" }}>
                <span className={styles.profileName}>Nesil AKSOY</span>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <div>
                  <span className={styles.text}>UX Designer</span>
                </div>
                <div>
                  <span className={styles.text}>
                    Türkiye, İstanbul, Sarıyer
                  </span>
                </div>
              </div>
              <div style={{ marginBottom: "18px" }}>
                <div>
                  <span className={styles.text}>
                    eray_karakullukcu.neyasis.com
                  </span>
                </div>
                <div>
                  <span className={styles.text}>+90 555 66 44</span>
                </div>
              </div>
              <div style={{ marginBottom: "16px" }}>
                <a href="" className={styles.findCvHref}>
                  Find CV’mi İndir
                </a>
              </div>
              <div>
                <a href="" className={styles.editProfileHref}>
                  Profili Düzenle
                </a>
              </div>
            </div>
          </div>
          <div className={styles.dividerLeft} />
          <div className={styles.flexBox}>
            <div id="website-info" className={styles.webSiteInfo}>
              <div>
                <span className={styles.infoTitle}>Web Sitesi</span>
              </div>
              <ul>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
              </ul>
              <div>
                <a href="" className={styles.editProfileHref}>
                  Düzenle
                </a>
              </div>
              <div className={styles.dividerLeft} />
            </div>
          </div>
          <div className={styles.flexBox}>
            <div id="website-info" className={styles.webSiteInfo}>
              <div>
                <span className={styles.infoTitle}>Web Sitesi</span>
              </div>
              <ul>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
              </ul>
              <div>
                <a href="" className={styles.editProfileHref}>
                  Düzenle
                </a>
              </div>
              <div className={styles.dividerLeft} />
            </div>
          </div>
          <div className={styles.flexBox}>
            <div id="website-info" className={styles.webSiteInfo}>
              <div>
                <span className={styles.infoTitle}>Web Sitesi</span>
              </div>
              <ul>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
              </ul>
              <div>
                <a href="" className={styles.editProfileHref}>
                  Düzenle
                </a>
              </div>
              <div className={styles.dividerLeft} />
            </div>
          </div>
        </section>
        <section className={styles.containerRight}>
          <div style={{ marginBottom: "30px" }}>
            <span className={styles.containerRightTitle}>Profil</span>
          </div>
          <div className={styles.containerRightBox}>
            <ProfileHeader title="Profesyonel Bakış" info={true} />
            <div>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className={styles.containerRightBox}>
            <ProfileHeader title="Deneyim" />
            <div className={styles.containerRightBox}>
              <ProfileExperiance
                title="Founder"
                companyTitle="Neyasis Technology"
                date="February 2014 - Present (6 Years , 10 Months)"
                location="Ümraniye - İstanbul / Turkey"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              />
              <ProfileExperiance
                title="Software Development Manager"
                companyTitle="IBM"
                date="Jully 2011 - January 2014  (2 Years, 6 Months)"
                location="Armonk- New York /ABD"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco."
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Index;
