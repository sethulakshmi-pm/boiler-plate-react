/**
 * watcherSaga.js; Saga to watch the actions
 * @author Akshay
 */
import { takeLatest } from "redux-saga/effects";
import { commonSaga } from "./commonSaga";
import { fileSaga } from "./fileSaga";
import { loginSaga } from "./loginSaga";

export function* watcherSaga() {
	yield takeLatest("CREATE_USER", commonSaga);
	yield takeLatest("UPLOAD_FILE", fileSaga);
	yield takeLatest("LOGIN_USER", loginSaga);
}
