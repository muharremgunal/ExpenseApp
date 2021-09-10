import { shallowEqual, useSelector } from "react-redux";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { setCurrencyType, fetchConvertedCurrency } from "../store/actions";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Balance = () => {
  const { total, currency, currenyAmount } =
    useSelector((state) => state, shallowEqual) ?? {};
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConvertedCurrency());
  }, [dispatch]);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {currency === "USD" ? "$" : "₺"}
        {currency === "USD" ? total : total * currenyAmount}
      </h1>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label">Currency</InputLabel>
        <Select
          labelId="select-label"
          fullWidth
          label="Currency"
          placeholder="Select a currency"
          onChange={(e) => {
            dispatch(setCurrencyType(e.target.value));
          }}
          value={currency}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="TRY">TR</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Balance;
