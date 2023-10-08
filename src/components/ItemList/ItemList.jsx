import { Item } from "../Item/Item";
import styles from "./ItemList.module.css";
export function ItemList({ items }) {
	const listItems = items.map((i) => <Item key={i}>{i}</Item>);
	return <ul className={styles.ul}>{listItems}</ul>;
}
