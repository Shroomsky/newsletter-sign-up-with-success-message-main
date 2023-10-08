import liIcon from "../../assets/images/icon-list.svg";
import styles from "./Item.module.css";

export function Item({children}) {
	return (
		<li className={styles.li} >
			<img src={liIcon} alt="" className={styles.img} />
			{children}
		</li>
	);
}
