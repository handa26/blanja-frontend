import React from "react";

import css from "./SearchItems.module.css";

const SearchItems = ({title, price, brand, img}) => (
  <div className={css.ItemCard}>
    <img className={css.ItemImage} src={img} alt={title} />
    <div className={css.ItemDesc}>
      <p className={css.ItemTitle}>{title}</p>
      <p className={css.ItemPrice}>Rp {price.toLocaleString()}</p>
      <p className={css.ItemBrand}>{brand}</p>
    </div>
  </div>
);

export default SearchItems;