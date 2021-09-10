import { useSelector } from "react-redux";
import Transaction from "./Transaction";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@material-ui/core";
import { useState } from "react";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);

  const [filteredState, setFilteredState] = useState("all");

  return (
    <>
      <Box>
        <h3>History</h3>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="All" name="row-radio-buttons-group">
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All"
              onClick={() => setFilteredState("all")}
              checked={filteredState === "all"}
            />
            <FormControlLabel
              value="expense"
              control={<Radio />}
              label="Expense"
              onClick={() => setFilteredState("expense")}
            />
            <FormControlLabel
              value="income"
              control={<Radio />}
              label="Income"
              onClick={() => setFilteredState("income")}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <ul className="list">
        {transactions
          .filter((item) => {
            if (filteredState === "all") {
              return item;
            }
            if (filteredState === "expense" && item.amount < 0) {
              return item;
            }
            if (filteredState === "income" && item.amount > 0) {
              return item;
            }
          })
          .map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
