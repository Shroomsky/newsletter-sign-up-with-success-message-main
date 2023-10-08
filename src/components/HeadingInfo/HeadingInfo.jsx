import styles from "./Headinginfo.module.css";

export function HeadingInfo({ heading, text }) {
	return (
		<div className={styles.info}>
			<h1 className={styles.h1}>{heading}</h1>
			<p className={styles.p}>{text}</p>
		</div>
	);
}
