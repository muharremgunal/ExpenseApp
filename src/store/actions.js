import { exchangeApi } from "../api/index";

const API_KEY = "d6a92b1b316df70c80b1bf5d";

export const deleteTransaction = (id) => ({
  type: "DELETE_TRANSACTION",
  payload: id,
});

export const addTransaction = (transaction) => ({
  type: "ADD_TRANSACTION",
  payload: transaction,
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  total,
});

export const fetchConvertedCurrency = () => async (dispatch) => {
  const { data } = await exchangeApi.get(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
  );

  const rates = data.conversion_rates.TRY;
  dispatch(setCurrencyAmount(rates));
};

export const setCurrencyAmount = (currenyAmount) => ({
  type: "SET_CURRENCY_AMOUNT",
  currenyAmount,
});

export const setCurrencyType = (currencyType) => ({
  type: "SET_CURRENCY",
  currencyType,
});
