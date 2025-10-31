import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import ActionTypes from "./action-types";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
    type: ActionTypes.INSERT_CELL_AFTER,
    payload: {
        id: null,
        type: 'code'
    }
})

store.dispatch({
    type: ActionTypes.INSERT_CELL_AFTER,
    payload: {
        id: null,
        type: 'text'
    }
})