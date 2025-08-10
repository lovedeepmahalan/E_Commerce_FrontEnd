import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Component/Cart/Cart'
import Navigation from '../Component/Navigation/Navigation'
import Footer from '../Component/Footer/Footer'
import HomePage from '../Pages/HomePage/HomePage'
import Product from '../Component/Product/Product'
import ProductDetail from '../Component/ProductDetail/ProductDetail'
import Checkout from '../Component/Checkout/Checkout'
import Order from '../Component/Order/Order'
import OrderDetails from '../Component/Order/OrderDetails'
import PaymentSuccess from '../Component/Payment/PaymentSuccess'

const CustomerRouters = () => {
  return (
      <div>
        <div>
            <Navigation/>
        </div>
      <div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetail/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            <Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route>

        
        {/* <OrderDetails/> */}
        </Routes>
      </div>
      <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters
