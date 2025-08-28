import { Category } from '@mui/icons-material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect } from 'react'
import { deleteProduct, findProducts } from "../../State/Product/Action"
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
const ProductsTable = () => {
  const dispatch = useDispatch()
  const { customerproduct } = useSelector(store => store);

  const handleProductDelete=(productId)=>{
    dispatch(deleteProduct(productId))
  }

  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000000,
      minDiscount: 50,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 5,
      stock: ""
    }
    dispatch(findProducts(data))
  }, [])
  return (
    <div >
      <Card className='mt-2' sx={{ mt: 2, height: "100%" }} >
        <CardHeader title="All Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Brand</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerproduct?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align='left' scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.brand}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <Button onClick={()=>handleProductDelete(item.id)}
                      variant="outlined"
                      color="error"
                      sx={{ textTransform: 'none', fontWeight: 600 }}
                    >
                      DELETE
                    </Button>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

    </div>
  )
}

export default ProductsTable
