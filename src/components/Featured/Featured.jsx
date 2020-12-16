import css from "./Featured.module.css";
import BenjaminVoros from "../../assets/images/benjamin-voros.png";
import IanDooley from "../../assets/images/ian-dooley.png";

function Featured() {
  return (
    <div id={css.Section}>
      <div className='container'>
        <div className={css.Tags}>
          <div className={css.List}>
            <div className={css.ItemTags}>
              <img src={BenjaminVoros} alt='tags' />
              <p className={css.ItemText}>Black edition</p>
            </div>
            <div className={css.ItemTags}>
              <img src={IanDooley} alt='tags' />
              <p className={css.ItemText}>Trends in 2020</p>
            </div>
            <div className={css.ItemTags}>
              <img src={BenjaminVoros} alt='tags' />
              <p className={css.ItemText}>Minimalist</p>
            </div>
            <div className={css.ItemTags}>
              <img src={IanDooley} alt='tags' />
              <p className={css.ItemText}>Limited Edition</p>
            </div>
            <div className={css.ItemTags}>
              <img src={BenjaminVoros} alt='tags' />
              <p className={css.ItemText}>Black Friday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;