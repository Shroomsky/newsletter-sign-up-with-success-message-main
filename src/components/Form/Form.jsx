import { useState } from "react";
import { Button } from "../Button/Button.jsx";
import styles from "./Form.module.css";
import { emailCheck } from "../../utilities/emailCheck.js";

export function Form({ setCompleted, setEmail }) {
	const [text, setText] = useState("");
	const [error, setError] = useState(false);

	function submitHandler(e) {
		e.preventDefault();
		if (emailCheck(text)) {
			setEmail(text);
			setCompleted(true);
			setError(false);
		} else {
			setError(true);
		}
	}

	return (
		<>
			<form className={styles.form} onSubmit={submitHandler}>
				{error && <p className={styles.error}>Valid email required</p>}
				<label htmlFor="email">Email addres</label>
				<input
					className={`${styles.input} ${error && styles.input_error}`}
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
