import { useReducer } from "react";
import { ItemList } from "./components/ItemList/ItemList.jsx";
import { Form } from "./components/Form/Form.jsx";
import { Completed } from "./components/Completed/Completed.jsx";
import { Header } from "./components/Header/Header.jsx";
import { HeadingInfo } from "./components/HeadingInfo/HeadingInfo.jsx";
import { appReducer } from "./utilities/appReducer";
import { emailCheck } from "./utilities/emailCheck";
import styles from "./App.module.css";

export function App() {
	const initialAppObj = { email: "", error: false, completed: false };

	const [AppObj, dispatch] = useReducer(appReducer, initialAppObj);

	const items = [
		"Product discovery and building what matters",
		"Measuring to ensure updates are a success",
		"And much more!",
	];

	function onDismissMessageClick() {
		dispatch({
			type: "dismiss_mesage",
			email: "",
		});
	}

	function sumbitHandlerRedus(text) {
		if (emailCheck(text)) {
			dispatch({
				type: "submit",
				email: text,
			});
		} else {
			dispatch({
				type: "submit_error",
				email: text,
			});
		}
	}

	return (
		<>
			{!AppObj.completed && (
				<div className={styles.app}>
					<Header />
					<section>
						<HeadingInfo
							heading="Stay updated!"
							text="Join 60,000+ product managers receiving monthly updates on:"></HeadingInfo>
						<ItemList items={items} />
						<Form sumbitHandlerRedus={sumbitHandlerRedus} AppObj={AppObj} />
					</section>
				</div>
			)}
			{AppObj.completed && (
				<Completed setCompleted={onDismissMessageClick} AppObj={AppObj} />
			)}
		</>
	);
}
