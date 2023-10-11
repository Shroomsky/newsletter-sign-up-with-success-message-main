import CompIcon from "../../assets/images/icon-success.svg";
import { Button } from "../Button/Button.jsx";
import styles from "./Completed.module.css";
export function Completed({ setCompleted, AppObj }) {
	
	return (
		<div className={styles.card}>
			<section className={styles.section}>
				<img src={CompIcon} alt="Completed Icon" className={styles.img} />
				<h1 className={styles.h1}>Thanks for subscribing!</h1>
				<p>
					{" "}
					A confirmation email has been sent to
					<span className={styles.span}> {AppObj.email}</span>. Please open it and
					click the button inside to confirm your subscription.
				</p>
				<Button onClick={setCompleted}>Dismiss message</Button>
			</section>
		</div>
	);
}
