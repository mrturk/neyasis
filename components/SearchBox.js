import SearchIcon from "@/public/assets/icons/SearchIcon";
import styles from "@/styles/SearchBox.module.css";
const SearchBox = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="İş Ara | İş, Şirket, Anathar Kelime"
      />
    </div>
  );
};
export default SearchBox;
