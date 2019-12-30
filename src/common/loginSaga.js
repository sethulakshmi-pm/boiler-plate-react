/**
 * loginSaga.js; a common saga for all login requests
 * @author Akshay
 */
import { call, put } from "redux-saga/effects";
import { enableAction, disableAction } from "./actions";
import { request } from "./request";
import { setSessionStorage } from "../Utils/Utils";

export function* loginSaga(actions) {
	const { action, actionType, callBack, errorCallBack } = actions.urlParams;
	yield put(enableAction("LOADER"));
	const { response, error } = yield call(request, actions);
	if (response) {
		yield put({
			type: `${action}_${actionType}_SUCCESS`,
			payload: { data: response.data.entity }
		});
		yield call(
			setSessionStorage,
			"authToken",
			`Bearer ${response.data.access_token}`
		);

		const userDetailsAction = {
			method: "get",
			url: `rest/file/fileStatus`,
			customHeaders: {
				Authorization: `Bearer ${response.data.access_token}`
			}
		};

		// fetch user details
		const { response: authResponse, error: authError } = yield call(
			request,
			userDetailsAction
		);

		yield put({
			type: `LOGIN_USER_DETAILS_SUCCESS`,
			payload: { data: authResponse.data.entity }
		})

		if(authError) {
			console.log(authError.response.data);
		}

		if (callBack) {
			callBack();
		}
		yield put(disableAction("LOADER"));
	} else {
		yield put({
			type: `${action}_${actionType}_ERROR`,
			payload: { message: error.response.data.message }
		});
		if (errorCallBack) {
			errorCallBack(error.response.data);
		}
		yield put(disableAction("LOADER"));
	}
}
