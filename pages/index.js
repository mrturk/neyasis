import SearchBox from "@/components/SearchBox";
import LeftArrowIcon from "@/public/assets/icons/LeftArrowIcon";
import RightArrowIcon from "@/public/assets/icons/RightArrowIcon";
import { getJsonPlaceHolderTodos } from "@/services/JsonPlaceHolder";
import { getSampleData } from "@/store/actions/sampleAction";
import styles from "@/styles/Home.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const images = [
  "img/1-acibadem.png",
  "img/2-akbank.png",
  "img/3-akcansa.png",
  "img/4-akkim.png",
  "img/5-akkok.png",
  "img/7-aktif-bank.png",
  "img/8-allianz.png",
  "img/9-anadolu-sigorta.png",
  "img/10-anel-grup.png",
  "img/arc-elik.png",
  "img/1280-px-bsh-bosch-und-siemens-hausgera-te-logo-svg-copy.png",
  "img/bezmia-lem-vak-f-u-niversitesi-logosu.png",
  "img/ronesans-holding.png",
  "img/1280-px-tav-airports-holding-logo-svg.png",
];

export default function Home() {
  const [data, setData] = useState();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  const ref = useRef();

  const dispatch = useDispatch();
  const sampleListData = useSelector((state) => state.sampleData);
  const { sample } = sampleListData;

  const prepareData = useCallback(async () => {
    const res = await getJsonPlaceHolderTodos(1);
    dispatch(getSampleData());
    setData(res);
  }, [dispatch]);

  useEffect(() => {
    prepareData();
  }, [prepareData]);

  const onNext = () => {
    ref.current.scrollTo({
      left: ref.current.scrollLeft + 236,
      behavior: "smooth",
    });
    if (ref.current.scrollLeft + 236 > 0) {
      setPrev(true);
    }
    if (
      ref.current.scrollLeft + 236 >=
      ref.current.scrollWidth - ref.current.clientWidth
    ) {
      setNext(false);
    }
  };

  const onPrev = () => {
    ref.current.scrollTo({
      left: ref.current.scrollLeft - 236,
      behavior: "smooth",
    });
    if (ref.current.scrollLeft - 236 < 0) {
      setPrev(false);
    }
    if (
      ref.current.scrollLeft - 236 <=
      ref.current.scrollWidth - ref.current.clientWidth
    ) {
      setNext(true);
    }
  };

  return (
    <main>
      <header>
        <div className={styles.header}>
          <div className={styles.login}>
            <div>
              <button className={styles.loginButton}>Kayıt Ol</button>
            </div>
            <div>
              <button className={styles.loginButton}>Giriş Yap</button>
            </div>
          </div>
          <div className={styles.headerLogoContainer}>
            <div className={styles.headerLogo}>
              <div>
                <img src="assets/img/logo.png" className={styles.logo} />
              </div>
              <div className={styles.headerTextContainer}>
                <img
                  src="assets/img/header-text.png"
                  className={styles.headerText}
                />
              </div>
            </div>
          </div>
          <div
            className={styles.searchBarContainer}
            style={{ paddingBottom: "50px" }}
          >
            <div className={styles.searchBar}>
              <div style={{ maxWidth: "554px", width: "100%" }}>
                <SearchBox />
              </div>
              <div>
                <div>
                  <button className={styles.searchButton}>
                    <img src="assets/img/group-6.png" />
                  </button>
                </div>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <span className={styles.info}>Detaylı Arama</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerBar}>
          <span className={styles.popularSearch}>Popüler aramalar</span>
          <div className={styles.popularSearchButtonList}>
            <button className={styles.popularSearchButton}>
              <span className={styles.populerSearchButtonSpan}>
                UX designer
              </span>
            </button>
            <button className={styles.popularSearchButton}>
              <span className={styles.populerSearchButtonSpan}>
                UI designer
              </span>
            </button>
            <button className={styles.popularSearchButton}>
              <span className={styles.populerSearchButtonSpan}>
                Front-end developer
              </span>
            </button>
            <button className={styles.popularSearchButton}>
              <span className={styles.populerSearchButtonSpan}>
                Back-end developer
              </span>
            </button>
            <button className={styles.popularSearchButton}>
              <span className={styles.populerSearchButtonSpan}>
                iOS developer
              </span>
            </button>
          </div>
        </div>
      </header>
      <div className={styles.container}>
        <section className={styles.sectionOne}>
          <div style={{ marginBottom: "15px" }}>
            <span className={styles.sectionOneTitle}>
              Öne çıkan iş ilanları
            </span>
          </div>
          <div ref={ref} id="content" className={styles.sectionOneContent}>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>IT Müdürü</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Bosch</span>
              </div>
              <div style={{ width: "103px", height: "30px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "30px" }}
                  src="assets/img/1.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Front-end Dev…</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Aktif Bank Genel Mü…</span>
              </div>
              <div style={{ width: "114px", height: "28px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "28px" }}
                  src="assets/img/aktifbank-logo.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Back-end Dev…</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Akbank Bank Genel…</span>
              </div>
              <div style={{ width: "115px", height: "13px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "13px" }}
                  src="assets/img/1280-px-akbank-logo-svg.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>.net Developer</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Arçelik</span>
              </div>
              <div style={{ width: "112px", height: "28px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "28px" }}
                  src="assets/img/arc-elik.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Junior .net Dev…</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Allianz</span>
              </div>
              <div style={{ width: "111px", height: "31px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "31px" }}
                  src="assets/img/logo-allianz.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Sales Manager</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Bezmialem Vakıf Ün…</span>
              </div>
              <div style={{ width: "88px", height: "44px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "44px" }}
                  src="assets/img/6.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>IT Müdürü</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Bosch</span>
              </div>
              <div style={{ width: "103px", height: "30px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "30px" }}
                  src="assets/img/1.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Front-end Dev…</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Aktif Bank Genel Mü…</span>
              </div>
              <div style={{ width: "114px", height: "28px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "28px" }}
                  src="assets/img/aktifbank-logo.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Back-end Dev…</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Akbank Bank Genel…</span>
              </div>
              <div style={{ width: "115px", height: "13px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "13px" }}
                  src="assets/img/1280-px-akbank-logo-svg.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>.net Developer</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Arçelik</span>
              </div>
              <div style={{ width: "112px", height: "28px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "28px" }}
                  src="assets/img/arc-elik.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Junior .net Dev…</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Allianz</span>
              </div>
              <div style={{ width: "111px", height: "31px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "31px" }}
                  src="assets/img/logo-allianz.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Sales Manager</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Bezmialem Vakıf Ün…</span>
              </div>
              <div style={{ width: "88px", height: "44px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "44px" }}
                  src="assets/img/6.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>IT Müdürü</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Bosch</span>
              </div>
              <div style={{ width: "103px", height: "30px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "30px" }}
                  src="assets/img/1.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Front-end Dev…</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Aktif Bank Genel Mü…</span>
              </div>
              <div style={{ width: "114px", height: "28px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "28px" }}
                  src="assets/img/aktifbank-logo.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Back-end Dev…</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Akbank Bank Genel…</span>
              </div>
              <div style={{ width: "115px", height: "13px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "13px" }}
                  src="assets/img/1280-px-akbank-logo-svg.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>.net Developer</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Arçelik</span>
              </div>
              <div style={{ width: "112px", height: "28px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "28px" }}
                  src="assets/img/arc-elik.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Junior .net Dev…</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Allianz</span>
              </div>
              <div style={{ width: "111px", height: "31px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "31px" }}
                  src="assets/img/logo-allianz.png"
                />
              </div>
            </div>
            <div className={styles.box}>
              <div style={{ textAlign: "center", marginBottom: "5px" }}>
                <span className={styles.contentTitle}>Sales Manager</span>
              </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <span className={styles.jobTitle}>Bezmialem Vakıf Ün…</span>
              </div>
              <div style={{ width: "88px", height: "44px", margin: "auto" }}>
                <img
                  style={{ width: "100%", height: "44px" }}
                  src="assets/img/6.png"
                />
              </div>
            </div>
          </div>
          <button
            style={{ backgroundColor: prev ? "#797674" : "#bfbcb9" }}
            onClick={onPrev}
            className={styles.prevButton}
          >
            <LeftArrowIcon />
          </button>
          <button
            style={{ backgroundColor: next ? "#797674" : "#bfbcb9" }}
            onClick={onNext}
            className={styles.nextButton}
          >
            <RightArrowIcon />
          </button>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.sectionTwoContent}>
            <img style={{ width: "100%" }} src="assets/img/ara.png" />
          </div>
          <div className={styles.sectionTwoContent}>
            <img style={{ width: "100%" }} src="assets/img/veren.png" />
          </div>
        </section>
        <section className={styles.sectinThree}>
          <div className={styles.sectinThreeContent}>
            {images.map((item, index) => {
              if (index <= 6) {
                return (
                  <div key={index} className={styles.sectinThreeBox}>
                    <img src={`assets/${item}`} />
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.sectinThreeContent}>
            {images.map((item, index) => {
              if (index > 6) {
                return (
                  <div key={index} className={styles.sectinThreeBox}>
                    <img src={`assets/${item}`} />
                  </div>
                );
              }
            })}
          </div>
        </section>
        <section className={styles.sectionFour}>
          <div className={styles.titleWrap}>
            <span className={styles.sectionFourTitle}>
              Sizin için iş ilanları
            </span>
          </div>
          <div className={styles.sectionFourContent}>
            <div className={styles.sectionFourContentBox}>
              <ul className={styles.sectionFourContentList}>
                <li>Popüler Kategoriler</li>
                <li style={{ width: "144px" }}>
                  Yazılım Geliştirme Mobil Uygulama Geliştirme Kullanıcı
                  Deneyimi Kullanılabilirlik Proje Yönetimi İş Analizi Raporlama
                  Uzmanı Test Uzmanı Yazılım Mimarı Arayüz Tasarımı
                </li>
              </ul>
            </div>
            <div className={styles.sectionFourContentBox}>
              <ul className={styles.sectionFourContentList}>
                <li>Popüler Başlıklar</li>
                <li style={{ width: "233px" }}>
                  Senior .net Developer Senior Mobile Developer Kullanıcı
                  Deneyimi Tasarımcısı Kullanılabilirlik Uzmanı IT Sorumlusu Mid
                  Level .net Developer
                </li>
              </ul>
            </div>
            <div className={styles.sectionFourContentBox}>
              <ul className={styles.sectionFourContentList}>
                <li>Popüler Lokasyonlar</li>
                <li style={{ width: "63px" }}>İstanbul İzmir Ankara</li>
              </ul>
            </div>
            <div className={styles.sectionFourContentBox}>
              <ul className={styles.sectionFourContentList}>
                <li>Popüler Şirket İlanları</li>
                <li style={{ width: "133px" }}>
                  Koç Sistem Aktif Bank Akbank Türk Hava Yolları Brisa Vakıfbank
                  Neyasis Tech.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLeftContent}>
            <div className={styles.footerLeftContentTitleWrap}>
              <span className={styles.footerLeftContentTitle}>
                ®2020 Finddeveloper.net
              </span>
            </div>
            <ul className={styles.footerLeftList}>
              <li>Gizlilik Merkezi</li>
              <li>Çerezler</li>
              <li>Gizlilik</li>
              <li>Şartlar</li>
            </ul>
          </div>
          <div className={styles.footerLeftIskur}>
            <div style={{ width: "80px", height: "80px" }}>
              <img style={{ width: "100%" }} src="assets/img/iskur-logo.png" />
            </div>
            <div>
              <p>
                Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak
                31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak
                üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124
                sayılı karar uyarınca 170 nolu belge ile faaliyet
                göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret
                alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için
                aşağıdaki telefon numaralarına başvurabilirsiniz. Diğer iller
                için tıklayın. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 555
                55 55 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye
                Hizmet Merkezi : 0216 523 90 26
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerRightContent}>
            <ul className={styles.footerLeftList}>
              <li>Finddeveloper’da Çalışmak</li>
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
}
