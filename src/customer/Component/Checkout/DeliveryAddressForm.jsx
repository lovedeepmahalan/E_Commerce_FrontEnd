import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {createOrder} from "../../../State/Order/Action"

const DeliveryAddressForm = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleEvent = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),   
        streetAddress: data.get('address'),
        state: data.get('state'),
        city:data.get('city'),
        pinCode: data.get('pin'),        
    };

    const orderData = { address,navigate };
    dispatch(createOrder(orderData)); 
};

  return (
    <Grid container spacing={4}>
      {/* Address Card Section */}
      <Grid size={{ xs: 12, lg: 5 }}>
        <Box className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <Box className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button className="text-left "
              sx={{ mt: 2, bgcolor: "rgb(145,85,253)", color: "#fff" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </Box>
        </Box>
      </Grid>

      {/* Form Section */}
      <Grid size={{ xs: 12, lg: 7 }}>
        <Box className="border rounded-s-md shadow-md p-5">
          <form onSubmit={handleEvent }>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  multiline
                  rows={4}
                  autoComplete="street-address"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Region"
                  fullWidth
                  autoComplete="address-level1"
                />
              </Grid>
               <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="address-level1"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  id="pin"
                  name="pin"
                  label="Pin Code"
                  fullWidth
                  autoComplete="postal-code"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    mt: 2,
                    bgcolor: "rgb(145,85,253)",
                    color: "#fff",
                    "&:hover": { bgcolor: "rgb(125,65,233)" },
                  }}
                >
                  Deliver Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DeliveryAddressForm;
