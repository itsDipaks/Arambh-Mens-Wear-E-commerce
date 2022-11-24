import {legacy_createStore,combineReducers,compose} from "redux"
import AuthReducer from "./Auth/auth.reducer"
import CartReducer from "./Cart/cartreducer"
import ProductReducer from "./Product/productreducer"

const rootReducers=combineReducers({
auth:AuthReducer,
product:ProductReducer,
cart:CartReducer
})
const create_composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store=legacy_createStore(rootReducers,create_composer())