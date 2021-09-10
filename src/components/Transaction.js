import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { deleteTransaction } from "../store/actions";
import { useDispatch } from "react-redux";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const dispatch = useDispatch();

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}$ {Math.abs(transaction.amount)}
      </span>
      <ClearIcon
        style={{ background: "#eee", cursor: "pointer" }}
        onClick={() => dispatch(deleteTransaction(transaction.id))}
      />
    </li>
  );
};

export default Transaction;
