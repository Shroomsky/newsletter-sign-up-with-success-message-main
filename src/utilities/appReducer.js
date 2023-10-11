export function appReducer(AppObj, action) {
	switch (action.type) {
		case "submit": {
			return { ...AppObj, email: action.email, completed: true };
		}
		case "submit_error": {
			return { ...AppObj, error: true, completed: false };
		}
		case "dismiss_mesage": {
			return {
				...AppObj,
				error: false,
				completed: false,
			};
		}
	}
}
