const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      const filteredTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );

      const newAmount = filteredTransactions.map(
        (transaction) => transaction.amount
      );

      const newTotal = newAmount
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

      localStorage.setItem(
        "transactions",
        JSON.stringify(filteredTransactions)
      );

      return {
        ...state,
        transactions: filteredTransactions,
        total: newTotal,
      };
    case "ADD_TRANSACTION":
      const newTransactions = [action.payload, ...state.transactions];
      localStorage.setItem("transactions", JSON.stringify(newTransactions));

      const amounts = newTransactions.map((transaction) => transaction.amount);

      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
      return {
        ...state,
        transactions: newTransactions,
        total,
      };
    case "SET_TOTAL":
      return {
        ...state,
        total: action.total,
      };
    case "SET_CURRENCY_AMOUNT":
      return {
        ...state,
        currenyAmount: action.currenyAmount,
      };
    case "SET_CURRENCY":
      localStorage.setItem("currency", action.currencyType);
      return {
        ...state,
        currency: action.currencyType,
      };
    default:
      return state;
  }
};

export default reducer;
