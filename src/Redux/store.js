import { createStore } from "redux";
import counter from "./Reducers/reducers";

const store = createStore(counter);
export default store;