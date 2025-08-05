import { Button, IconButton, rgbToHex } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { green } from "@mui/material/colors";
const CartItem = ({item}) => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        {/* Product Image */}
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/2/q/g/30-jeans-kneecut-black-crishtaliyo-2fashion-original-imaggy6gzmpwqkge.jpeg?q=70"
            alt=""
          />
        </div>

        {/* Text Content */}
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size: {item.size}, White</p>
          <p className="opacity-70 mt-2">Seller: {item.product.brand}</p>

          {/* Price Section */}
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹{item.price}</p>
            <p className="opacity-50 line-through">₹{item.discountedPrice}</p>
            <p className="text-green-600 font-semibold">{item.discountPersent}% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
  {/* Quantity Controller */}
  <div className="flex items-center space-x-2">
    <IconButton>
      <RemoveCircleOutlineIcon />
    </IconButton>
    <span className="py-1 px-7 border rounded-sm">3</span>
    <IconButton sx={{color: 'violet'}}>
      <AddCircleOutlineIcon />
    </IconButton>
  </div>

  {/* Remove Button */}
  <div>
    <Button sx={{color:'violet'}}>remove</Button>
  </div>
</div>

    </div>
  );
};
export default CartItem