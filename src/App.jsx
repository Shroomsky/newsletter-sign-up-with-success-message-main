import styles from "./App.module.css";
import { ItemList } from "./components/ItemList/ItemList.jsx";
import { Form } from "./components/Form/Form.jsx";
import { Completed } from "./components/Completed/Completed.jsx";
import { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { HeadingInfo } from "./components/HeadingInfo/HeadingInfo.jsx";

export function App() {
	const [completed, setCompleted] = useState(false);
	const [email, setEmail] = useState("");
	const items = [
		"Product discovery and building what matters",
		"Measuring to ensure updates are a success",
		"And much more!",
	];

	return (
		<>
			{!completed && (
				<div className={styles.app}>
					<Header />
					<section>
						<HeadingInfo
							heading="Stay updated!"
							text="Join 60,000+ product managers receiving monthly updates on:"></HeadingInfo>
						<ItemList items={items} />
						<Form setCompleted={setCompleted} setEmail={setEmail} />
					</section>
				</div>
			)}
			{completed && <Completed setCompleted={setCompleted} email={email} />}
		</>
	);
}
