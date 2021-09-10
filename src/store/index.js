import { createStore, applyMiddleware } from "redux";
import RootReducer from "./AppReducer";
import thunk from "redux-thunk";

const transactions = JSON.parse(localStorage.getItem("transactions")) ?? [];
const currency = localStorage.getItem("currency") ?? "USD";

const amounts = transactions.map((transaction) => transaction.amount);

const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

const initialStore = {
  transactions,
  total,
  currency,
  currenyAmount: null,
};

const store = createStore(RootReducer, initialStore, applyMiddleware(thunk));

export default store;
