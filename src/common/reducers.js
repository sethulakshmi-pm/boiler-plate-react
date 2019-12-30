/**
 * common reducer function for enable
 * @param reducerName
 * @returns reducer for corresponding name
 * @author Akshay
 */
export function enableWithNamedType(reducerName = "") {
	const initialState = { enable: false };
	return function enableDisable(state = initialState, action) {
		switch (action.type) {
			case `ENABLE_${reducerName}`:
			case `DISABLE_${reducerName}`:
				return { ...state, ...action.payload };
			default:
				return state;
		}
	};
}

/**
 * common reducer function for data
 * @param reducerName
 * @returns reducer for corresponding reducerName
 * @author Akshay
 */
export function fetchWithNamedType(reducerName = "") {
	const initialState = { data: { userId: null } };
	return function counter(state = initialState, action) {
		switch (action.type) {
			// upload file
			case `UPLOAD_${reducerName}`:
			case `UPLOAD_${reducerName}_SUCCESS`:
			case `UPLOAD_${reducerName}_ERROR`:
			case `VERIFY_${reducerName}`:
			case `VERIFY_${reducerName}_SUCCESS`:
			case `VERIFY_${reducerName}_ERROR`:
			case `CREATE_${reducerName}`:
			case `CREATE_${reducerName}_SUCCESS`:
			case `CREATE_${reducerName}_ERROR`:
			case `LOGIN_${reducerName}`:
			case `LOGIN_${reducerName}_SUCCESS`:
			case `LOGIN_${reducerName}_ERROR`:
			case `FETCH_${reducerName}`:
			case `FETCH_${reducerName}_SUCCESS`:
			case `FETCH_${reducerName}_ERROR`:
				return { ...state, ...action.payload };
			case `CLEAR_${reducerName}`:
				return initialState;
			default:
				return state;
		}
	};
}
