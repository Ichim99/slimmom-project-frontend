//import css from './DiarySelectProduct.module.css';

//export default function DiarySelectProduct({ data, onClick }) {
//  return (
 //   <ul className={css.list}>
  //    {data.map(product => {
  //      return (
   //       <li className={css.item} key={product._id} onClick={onClick}>
   //         {product.title.ru}
  //        </li>
  //      );
  //    })}
   // </ul>
  //);
//}

import css from './DiarySelectProduct.module.css';

export default function DiarySelectProduct({ data, onClick }) {
  return (
    <ul className={css.list}>
      {data.map(product => (
        <li
          className={css.item}
          key={product._id}
          onClick={() => onClick(product)}
        >
          {product.title.ru} - {product.calories} kcal
        </li>
      ))}
    </ul>
  );
}
