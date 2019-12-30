export function enableAction(reducerName) {
	return {
		type: `ENABLE_${reducerName}`,
		payload: {
			enable: true
		}
	};
}

export function disableAction(reducerName) {
	return {
		type: `DISABLE_${reducerName}`,
		payload: {
			enable: false
		}
	};
}

export function clearReducer(reducerName) {
	return {
		type: `CLEAR_${reducerName}`
	};
}

export function commonAction(
	action,
	reducerName,
	method,
	url,
	data,
	customHeaders,
	callBack,
	errorCallBack
) {
	return {
		type: `${action}_${reducerName}`,
		urlParams: {
			action,
			reducerName,
			method,
			url,
			data,
			customHeaders,
			callBack,
			errorCallBack
		}
	};
}
