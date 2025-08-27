import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Box from "@mui/material/Box"
import ListItemIcon from '@mui/material/ListItemIcon';
import EmailIcon from "@mui/icons-material/Email"
import InboxIcon from "@mui/icons-material/Inbox"
import DashBoardIcon from "@mui/icons-material/Dashboard"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import ListItemText from '@mui/material/ListItemText';
import AdminDashBoard from "../../src/Admin/Components/DashBoard"
import CreateProduct from "../../src/Admin/Components/CreateProduct"
import CustomersTable from "../../src/Admin/Components/CustomersTable"
import OrdersTable from "../../src/Admin/Components/OrdersTable"
import ProductsTable from "../../src/Admin/Components/ProductsTable"


const menu = [
  { name: "Dashboard", path: "/admin" ,icon:<DashBoardIcon/>},
  { name: "Products", path: "/admin/products" ,icon:<DashBoardIcon/>},
  { name: "Customers", path: "/admin/customers" ,icon:<DashBoardIcon/>},
  { name: "Orders", path: "/admin/orders",icon:<DashBoardIcon/> },
  { name: "AddProduct", path: "/admin/product/create" ,icon:<DashBoardIcon/>},
  { name: "", path: " " },
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const[sideBarVisible,setSideBarVisible]=useState(false);
    const navigate=useNavigate()
    const drawer=(
        <Box
  sx={{
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border:'1px solid blue',
    height:"100%",
    position:"sticky"
  }}    
>
  {/* {isLargeScreen && <Toolbar />} */}
  <List>
    {menu.map((item, index) => (
      <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
        <ListItemButton>
            <ListItemIcon>
                {item.icon}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
        </ListItemButton>
      </ListItem>
    ))}
  </List>

  <List>
      <ListItem  disablePadding>
        <ListItemButton>
            <ListItemIcon>
               <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
        </ListItemButton>
      </ListItem>
  </List>
</Box>

    )
  return (
    <div>
        <div className='flex h-[100vh]'>
            <CssBaseline/>
            <div className='w-[15%] border border-r-gray-300 h-full'>
                {drawer}
            </div >
            <div className='w-[68%]'>
                <Routes>
                    <Route path='/' element={<AdminDashBoard/>}></Route>
                    <Route path='/product/create' element={<CreateProduct/>}></Route>
                    <Route path='/products' element={<ProductsTable/>}></Route>
                    <Route path='/orders' element={<OrdersTable/>}></Route>
                    <Route path='/customers' element={<CustomersTable/>}></Route>
                </Routes>
            </div>
        </div>

    </div>
  )
}

export default Admin
