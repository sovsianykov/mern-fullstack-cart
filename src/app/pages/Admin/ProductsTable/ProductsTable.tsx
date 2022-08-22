import React, { memo } from "react";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import Row from "./Row";
import { useFetchAllProducts } from "../../../hooks/useFetchAllProducts";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../../constants/theme";


const useStyles = makeStyles(()=>({
  cell: {
    padding: theme.spacing(0.5,2),
    background:"#dcdbdb",
    border: "1px solid #ccc",
    color: "#494848",
    fontSize: 16,
    fontWeight: 300
  }
}))




const ProductsTable = () => {
  useFetchAllProducts()
  const { products } = useAppSelector(state => state.productsReducer)
  const classes = useStyles()


  return (
    <Box>
      <Typography variant='h6' align='center'>
        All products
      </Typography>
    <table>
      <thead>
      <tr>
        <th className={classes.cell}>Title</th>
        <th className={classes.cell}>Category</th>
        <th className={classes.cell}>Price</th>
        <th className={classes.cell}>Delete</th>
      </tr>
      </thead>
      <tbody>
      {products.map(product => <Row product={product} key={product._id}/>)}
      </tbody>
    </table>
    </Box>
  );
};

export default memo(ProductsTable);
