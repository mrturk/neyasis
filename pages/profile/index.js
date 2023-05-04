import ProfileCertificate from "@/components/ProfileCertificate";
import ProfileEducation from "@/components/ProfileEducation";
import ProfileExperiance from "@/components/ProfileExperiance";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileInfoOther from "@/components/ProfileInfoOther";
import ProfileOther from "@/components/ProfileOther";
import SearchBox from "@/components/SearchBox";
import DocIcon from "@/public/assets/icons/DocIcon";
import DownloadIcon from "@/public/assets/icons/DownloadIcon";
import EditIcon from "@/public/assets/icons/EditIcon";
import HardDriveIcon from "@/public/assets/icons/HardDriveIcon";
import MediaIcon from "@/public/assets/icons/MediaIcon";
import SaveSearchIcon from "@/public/assets/icons/SaveSearchIcon";
import styles from "@/styles/Profile.module.css";

const Index = () => {
  return (
    <main>
      <header id="header">
        <div className={styles.header}>
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
        </div>
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
      </header>
      <div id="content" className={styles.container}>
        <section className={styles.containerLeft}>
          <div className={styles.flexBoxProfile}>
            <div className={styles.profilePictureEdit}>
              <img src="assets/img/group-3.png" />
              <img
                src="assets/img/group-39.png"
                style={{
                  width: "64px",
                  height: "64px",
                  position: "absolute",
                  left: -1,
                  top: -1,
                }}
              />
              <EditIcon
                style={{
                  position: "absolute",
                  left: 17,
                  top: 13,
                }}
              />
            </div>
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
              <div
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <DownloadIcon />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a href="" className={styles.findCvHref}>
                    Find CV’mi İndir
                  </a>
                </div>
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
                {[...Array(8)].map((item, index) => {
                  return (
                    <li key={index}>
                      <MediaIcon />
                    </li>
                  );
                })}
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
            <ProfileInfoOther
              title="Dokümanlar"
              icon={<DocIcon />}
              data={["eraycv.docx", "eraycv—eng.pdf", "mcpd-cert.pdf"]}
              edit="Başka bir doküman ekle"
            />
            <div className={styles.dividerLeft} />
          </div>
          <div className={styles.flexBox}>
            <ProfileInfoOther
              title="Kaydedilen Aramalarım"
              icon={<SaveSearchIcon />}
              data={["Neyasis Tech.", "Apple"]}
            />
            <div className={styles.dividerLeft} />
          </div>
          <div className={styles.flexBox}>
            <ProfileInfoOther
              title="Dokümanlar"
              icon={<HardDriveIcon />}
              data={["Neyasis Tech."]}
              edit="Tümünü Gör"
            />
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
            <div>
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
          <div className={styles.containerRightBox}>
            <ProfileHeader title="Eğitim" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <ProfileEducation
                title="Bahçeşehir Üniversitesi"
                degre="Master Degree"
                faculty="Computer & Information Scienses"
                date="2015-2019"
              />
              <ProfileEducation
                title="Boğaziçi Üniversitesi"
                degre="Bachelor’s Degree"
                faculty="Political Science and International Relations"
                date="2010-2015"
              />
            </div>
          </div>
          <div className={styles.containerRightBox}>
            <ProfileHeader title="Sertifikalar" />
            <div>
              <ProfileCertificate
                title="MCP (Microsoft Certified Professional)"
                company="Microsoft"
                date="January 2015"
              />
            </div>
          </div>
          <div className={styles.containerRightBox}>
            <ProfileHeader title="Yetenekler" />
            <ProfileOther
              data={["C#.Net (10 years)", "Swift (5 years)", "React (3 years)"]}
            />
          </div>
          <div className={styles.containerRightBox}>
            <ProfileHeader title="İlgi Alanları" />
            <ProfileOther
              data={["Boating / Sailing", "Snowboarding", "Windsurfing"]}
            />
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLeftContent}>
            <div className={styles.footerLeftContentTitleWrap}>
              <span className={styles.footerLeftContentTitle}>
                findtalent.net © 2022
              </span>
            </div>
            <ul className={styles.footerLeftList}>
              <li>Gizlilik Merkezi</li>
              <li>Çerezler</li>
              <li>Gizlilik</li>
              <li>Şartlar</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerRightContent}>
            <ul className={styles.footerLeftList}>
              <li>findtalent.net’de Çalışmak</li>
              <li>Hakkımızda</li>
              <li>Yardım Merkezi</li>
            </ul>
            <div className={styles.footerLeftContentTitleWrap}>
              <select className={styles.footerSelect}>
                <option>Türkçe</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};
export default Index;
