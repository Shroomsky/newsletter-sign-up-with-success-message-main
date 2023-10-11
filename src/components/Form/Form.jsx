import { useState } from "react";
import { Button } from "../Button/Button.jsx";
import styles from "./Form.module.css";

export function Form({ AppObj, sumbitHandlerRedus }) {
	const [text, setText] = useState("");
	return (
		<>
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					sumbitHandlerRedus(text);
				}}>
				{AppObj.error && <p className={styles.error}>Valid email required</p>}
				<label htmlFor="email">Email address</label>
				<input
					className={`${styles.input} ${AppObj.error && styles.input_error}`}
					id="email"
					type="text"
					autoComplete="off"
					placeholder="email@company.com"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button>Subscribe to monthly newsletter</Button>
			</form>
		</>
	);
}
