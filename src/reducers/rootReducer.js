/**
 * rootReducer.js
 */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { enableWithNamedType, fetchWithNamedType } from "../common/reducers";

const rootReducer = combineReducers({
	form: formReducer,
	file: fetchWithNamedType("FILE"),
	loader: enableWithNamedType("LOADER"),
	user: fetchWithNamedType("USER"),
	userDetails: fetchWithNamedType("USER_DETAILS")
});

export default rootReducer;
